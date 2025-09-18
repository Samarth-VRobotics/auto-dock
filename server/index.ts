import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
const PORT = Number(process.env.PORT || 3001);

// --- Single CSV path ---
const SINGLE_CSV_PATH = (() => {
  const p = process.env.CSV_PATH ?? path.join("data", "submissions.csv");
  return path.isAbsolute(p) ? p : path.join(process.cwd(), p);
})();

// --- PDF path to download ---
const BROCHURE_PATH = (() => {
  const p = process.env.BROCHURE_PATH ?? path.join("public", "Vegam Robotic brochure (1).pdf");
  return path.isAbsolute(p) ? p : path.join(process.cwd(), p);
})();

// --- CSV schema (header fields) ---
const HEADER_FIELDS = [
  "timestamp",
  "form_type", // "contact" | "book_call" | "download_deck"
  "name",
  "email",
  "phone",
  "company",
  "job_title",
  "industry",
  "message",
];

// --- Middleware ---
app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use((req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// --- CSV helpers ---
function csvEscape(val: unknown): string {
  const s = val == null ? "" : String(val);
  return /[",\n\r]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}
function ensureDirExists(dir: string) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}
function getHeaderLine(headers: string[]) {
  return headers.map(csvEscape).join(",");
}
function ensureCsvHeader(filePath: string, headers: string[]) {
  ensureDirExists(path.dirname(filePath));
  const headerLine = getHeaderLine(headers);

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, headerLine + "\n", "utf8");
    console.log(`CSV header written (new file) → ${filePath}`);
    return;
  }
  const stats = fs.statSync(filePath);
  if (stats.size === 0) {
    fs.writeFileSync(filePath, headerLine + "\n", "utf8");
    console.log(`CSV header written (empty file) → ${filePath}`);
    return;
  }
  const fd = fs.openSync(filePath, "r");
  try {
    const probeSize = Math.min(8192, stats.size);
    const buffer = Buffer.alloc(probeSize);
    fs.readSync(fd, buffer, 0, probeSize, 0);
    const firstLine = buffer.toString("utf8").split(/\r?\n/)[0]?.trim() ?? "";
    if (firstLine !== headerLine) {
      const original = fs.readFileSync(filePath, "utf8");
      fs.writeFileSync(filePath, headerLine + "\n" + original, "utf8");
      console.log(`CSV header inserted at top (was missing) → ${filePath}`);
    }
  } finally {
    fs.closeSync(fd);
  }
}
function appendCsvRow(filePath: string, headers: string[], row: Record<string, any>) {
  ensureCsvHeader(filePath, headers);
  const rowLine = headers.map((h) => csvEscape(row[h])).join(",") + "\n";
  fs.appendFileSync(filePath, rowLine, { encoding: "utf8" });
  console.log(`CSV row appended → ${filePath}`);
}
function getCsvStats(filePath: string) {
  try {
    const exists = fs.existsSync(filePath);
    if (!exists) return { exists: false, size: 0, rows: 0 };
    const text = fs.readFileSync(filePath, "utf8");
    const rows = text.split(/\r?\n/).filter(Boolean).length;
    const size = fs.statSync(filePath).size;
    return { exists: true, size, rows };
  } catch (e) {
    return { exists: false, size: 0, rows: 0, error: String(e) };
  }
}

// --- Routes ---

// Health check + CSV stats
app.get("/api/contact", (_req, res) => {
  return res.json({
    ok: true,
    csvPath: SINGLE_CSV_PATH,
    stats: getCsvStats(SINGLE_CSV_PATH),
    brochureExists: fs.existsSync(BROCHURE_PATH),
    brochurePath: BROCHURE_PATH,
  });
});

// Save data to single CSV
app.post("/api/contact", (req, res) => {
  try {
    const { isBookCallDialog, formData, formType } = req.body as {
      isBookCallDialog?: boolean;
      formType?: string; // e.g., "download_deck"
      formData: {
        firstName: string;
        lastName?: string;
        email: string;
        phone?: string;
        company?: string;
        jobTitle?: string;
        industry?: string;
        message?: string;
      };
    };

    if (!formData?.firstName || !formData?.email) {
      console.warn("400 Missing required fields", formData);
      return res.status(400).json({ error: "Missing required fields" });
    }

    const effectiveFormType =
      (formType && String(formType)) ||
      (isBookCallDialog ? "book_call" : "contact");

    const row = {
      timestamp: new Date().toISOString(),
      form_type: effectiveFormType,
      name: `${formData.firstName} ${formData.lastName ?? ""}`.trim(),
      email: formData.email,
      phone: formData.phone ?? "",
      company: formData.company ?? "",
      job_title: formData.jobTitle ?? "",
      industry: formData.industry ?? "",
      message: formData.message ?? "",
    };

    console.log("Appending row:", row);
    appendCsvRow(SINGLE_CSV_PATH, HEADER_FIELDS, row);

    const stats = getCsvStats(SINGLE_CSV_PATH);
    return res.status(200).json({ ok: true, stats });
  } catch (err) {
    console.error("/api/contact POST error:", err);
    return res.status(500).json({ error: "Server error" });
  }
});

// DIRECT DOWNLOAD endpoint (no new tab needed)
app.get("/api/download/deck", (req, res) => {
  try {
    if (!fs.existsSync(BROCHURE_PATH)) {
      return res.status(404).send("PDF not found");
    }
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="Vegam_Robotics_Deck.pdf"'
    );
    res.setHeader("Cache-Control", "public, max-age=3600");
    const stream = fs.createReadStream(BROCHURE_PATH);
    stream.pipe(res);
    stream.on("error", (e) => {
      console.error("PDF stream error:", e);
      if (!res.headersSent) res.status(500).end("Failed to read file");
    });
  } catch (e) {
    console.error("Download error:", e);
    if (!res.headersSent) res.status(500).end("Server error");
  }
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
  console.log(`Server CSV path: ${SINGLE_CSV_PATH}`);
  console.log(`Brochure path: ${BROCHURE_PATH} (exists: ${fs.existsSync(BROCHURE_PATH)})`);
});