import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { sendDemoConfirmationEmail } from "@/lib/emailService";

interface DemoDialogProps {
  children: React.ReactNode;
}

const DemoDialog = ({ children }: DemoDialogProps) => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<'email' | 'video'>('email');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const emailSent = await sendDemoConfirmationEmail({
        name: formData.name,
        email: formData.email,
        product: "AutoDock Demo",
        company: formData.company
      });

      if (emailSent) {
        toast({
          title: "Success!",
          description: "We've sent you a confirmation email. Enjoy the demo!",
        });
        setStep('video');
      } else {
        toast({
          title: "Demo Access Granted",
          description: "Enjoy watching the AutoDock demo!",
        });
        setStep('video');
      }
    } catch (error) {
      console.error('Error submitting demo request:', error);
      toast({
        title: "Demo Access Granted",
        description: "Enjoy watching the AutoDock demo!",
      });
      setStep('video');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setStep('email');
    setFormData({ name: '', email: '', company: '' });
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <div onClick={() => setOpen(true)}>
        {children}
      </div>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        {step === 'email' ? (
          <>
            <DialogHeader>
              <DialogTitle>Watch AutoDock Demo</DialogTitle>
              <DialogDescription>
                Enter your details to access our exclusive AutoDock demonstration video.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@company.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company (Optional)</Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your company name"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Watch Demo"}
              </Button>
            </form>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>AutoDock Demo Video</DialogTitle>
              <DialogDescription>
                See how AutoDock revolutionizes warehouse operations with true dock autonomy.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <video
                  controls
                  autoPlay
                  className="w-full h-full rounded-lg"
                  poster="/assets/hero-dock-autonomy.jpg"
                >
                  {/* Replace with actual demo video URL */}
                  <source src="/path-to-your-demo-video.mp4" type="video/mp4" />
                  <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                    <div className="text-6xl mb-4">🎥</div>
                    <p className="text-lg font-semibold">Demo Video</p>
                    <p className="text-sm">AutoDock in Action</p>
                  </div>
                </video>
              </div>
              <div className="text-sm text-muted-foreground text-center">
                <p>Interested in seeing AutoDock live? <br />
                Contact our team to schedule an in-person demonstration.</p>
              </div>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  onClick={handleClose}
                  className="flex-1"
                >
                  Close
                </Button>
                <Button 
                  onClick={() => {
                    handleClose();
                    // Trigger contact dialog here if needed
                  }}
                  className="flex-1"
                >
                  Schedule Live Demo
                </Button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DemoDialog;