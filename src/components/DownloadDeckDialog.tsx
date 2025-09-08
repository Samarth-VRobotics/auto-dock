import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface DownloadDeckDialogProps {
  children: React.ReactNode;
}

const DownloadDeckDialog = ({ children }: DownloadDeckDialogProps) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save data to Supabase
      const { error } = await supabase
        .from('deck_download_requests')
        .insert([{ name, email }]);

      if (error) {
        throw error;
      }

      // Trigger PDF download/open
      const pdfUrl = 'https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/Vegam%20Robotic%20brochure%20(1).pdf';
      
      // Open PDF in new tab - this is more reliable than download
      const newWindow = window.open(pdfUrl, '_blank', 'noopener,noreferrer');
      
      if (!newWindow) {
        // If popup was blocked, try direct navigation
        window.location.href = pdfUrl;
        
        toast({
          title: "PDF Opening",
          description: "If the PDF doesn't open, please check your popup blocker settings.",
        });
      } else {
        toast({
          title: "Success!",
          description: "PDF opened in new tab. Data saved successfully.",
        });
      }

      // Reset form and close dialog
      setName("");
      setEmail("");
      setOpen(false);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Download Deck</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your full name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email address"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Download Deck"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadDeckDialog;