-- Create table for deck download requests
CREATE TABLE public.deck_download_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.deck_download_requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert download requests
CREATE POLICY "Anyone can insert deck download requests" 
ON public.deck_download_requests 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow users to view all download requests (for admin purposes)
CREATE POLICY "Users can view deck download requests" 
ON public.deck_download_requests 
FOR SELECT 
USING (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_deck_download_requests_updated_at
BEFORE UPDATE ON public.deck_download_requests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();