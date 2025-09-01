import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface Video {
  id: string;
  title: string;
  description: string | null;
  file_path: string;
  thumbnail_path: string | null;
}
interface DemoDialogProps {
  children: React.ReactNode;
}
const DemoDialog = ({
  children
}: DemoDialogProps) => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<'email' | 'video'>('email');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [video, setVideo] = useState<Video | null>(null);
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [videoLoading, setVideoLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });
  const {
    toast
  } = useToast();

  // Fetch demo video when transitioning to video step
  useEffect(() => {
    if (step === 'video' && !video) {
      fetchDemoVideo();
    }
  }, [step]);

  const fetchDemoVideo = async () => {
    setVideoLoading(true);
    try {
      // Get the first active video from the videos table
      const { data: videos, error: videosError } = await supabase
        .from('videos')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false })
        .limit(1);

      if (videosError) throw videosError;

      if (videos && videos.length > 0) {
        const videoData = videos[0];
        setVideo(videoData);

        // Get the signed URL for the video file
        const { data: signedUrlData } = await supabase.storage
          .from('videos')
          .createSignedUrl(videoData.file_path, 3600); // 1 hour expiry

        if (signedUrlData?.signedUrl) {
          setVideoUrl(signedUrlData.signedUrl);
        }
      }
    } catch (error) {
      console.error('Error fetching demo video:', error);
      toast({
        title: "Video Loading Error",
        description: "Unable to load the demo video. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setVideoLoading(false);
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
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
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('demo_requests')
        .insert({
          name: formData.name,
          email: formData.email,
          company: formData.company || null
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Success!",
        description: "Enjoy watching the AutoDock demo!"
      });
      setStep('video');
    } catch (error) {
      console.error('Error submitting demo request:', error);
      toast({
        title: "Error",
        description: "Failed to submit demo request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleClose = () => {
    setOpen(false);
    setStep('email');
    setVideo(null);
    setVideoUrl('');
    setVideoLoading(false);
    setFormData({
      name: '',
      email: '',
      company: ''
    });
  };
  return <Dialog open={open} onOpenChange={handleClose}>
      <div onClick={() => setOpen(true)}>
        {children}
      </div>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        {step === 'email' ? <>
            <DialogHeader>
              <DialogTitle>Watch AutoDock Demo</DialogTitle>
              <DialogDescription>
                Enter your details to access our exclusive AutoDock demonstration video.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input id="name" name="name" type="text" value={formData.name} onChange={handleInputChange} placeholder="Your full name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@company.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company (Optional)</Label>
                <Input id="company" name="company" type="text" value={formData.company} onChange={handleInputChange} placeholder="Your company name" />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Processing..." : "Watch Demo"}
              </Button>
            </form>
          </> : <>
            <DialogHeader>
              <DialogTitle>AutoDock Demo Video</DialogTitle>
              <DialogDescription>
                See how AutoDock revolutionizes warehouse operations with true dock autonomy.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                {videoLoading ? (
                  <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
                    <p className="text-lg font-semibold">Loading Demo Video...</p>
                  </div>
                ) : videoUrl && video ? (
                  <video 
                    controls 
                    autoPlay 
                    className="w-full h-full rounded-lg" 
                    poster={video.thumbnail_path ? 
                      supabase.storage.from('videos').getPublicUrl(video.thumbnail_path).data.publicUrl : 
                      "/src/assets/hero-dock-autonomy.jpg"
                    }
                  >
                    <source src={videoUrl} type="video/mp4" />
                    <p>Your browser does not support the video tag.</p>
                  </video>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                    <div className="text-6xl mb-4">🎥</div>
                    <p className="text-lg font-semibold">Demo Video Coming Soon</p>
                    <p className="text-sm">Please check back later for our AutoDock demonstration</p>
                  </div>
                )}
              </div>
              
              {video && video.description && (
                <div className="text-sm text-muted-foreground text-center">
                  <p>{video.description}</p>
                </div>
              )}
              
              <div className="text-sm text-muted-foreground text-center">
                <p>Interested in seeing AutoDock live? <br />
                Contact our team to schedule an in-person demonstration.</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={handleClose} className="flex-1">
                  Close
                </Button>
                <Button onClick={() => {
                  handleClose();
                  // User can click "Contact Us" to open contact dialog
                }} className="flex-1">Contact Us</Button>
              </div>
            </div>
          </>}
      </DialogContent>
    </Dialog>;
};
export default DemoDialog;