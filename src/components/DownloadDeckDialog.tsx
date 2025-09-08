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

      // Trigger PDF download
      try {
        const pdfUrl = 'https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/Vegam%20Robotic%20brochure%20(1).pdf';
        
        // Try direct download first
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Vegam-Robotics-Brochure.pdf';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        
        // Temporarily add to DOM for better browser compatibility
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Fallback: open in new tab if download doesn't work
        setTimeout(() => {
          window.open(pdfUrl, '_blank');
        }, 100);

        toast({
          title: "Success!",
          description: "Your download will begin shortly. If it doesn't start automatically, check your downloads folder or popup blocker.",
        });
      } catch (downloadError) {
        console.error('Download error:', downloadError);
        // Fallback to opening in new tab
        window.open('https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/Vegam%20Robotic%20brochure%20(1).pdf', '_blank');
        
        toast({
          title: "Download initiated",
          description: "The PDF has been opened in a new tab. You can save it from there.",
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