-- Create videos storage bucket
INSERT INTO storage.buckets (id, name, public) 
VALUES ('videos', 'videos', true);

-- Create RLS policies for videos bucket
CREATE POLICY "Anyone can view videos" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'videos');

CREATE POLICY "Admin can upload videos" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'videos' AND auth.role() = 'authenticated');

CREATE POLICY "Admin can update videos" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'videos' AND auth.role() = 'authenticated');

CREATE POLICY "Admin can delete videos" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'videos' AND auth.role() = 'authenticated');

-- Create videos metadata table
CREATE TABLE IF NOT EXISTS public.videos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  file_path TEXT NOT NULL,
  thumbnail_path TEXT,
  duration INTEGER, -- in seconds
  file_size BIGINT, -- in bytes
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_active BOOLEAN DEFAULT true
);

-- Enable RLS on videos metadata table
ALTER TABLE public.videos ENABLE ROW LEVEL SECURITY;

-- Create policies for videos metadata
CREATE POLICY "Anyone can view active videos" 
ON public.videos 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Admin can manage videos" 
ON public.videos 
FOR ALL 
USING (auth.role() = 'authenticated');

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_videos_updated_at
BEFORE UPDATE ON public.videos
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();