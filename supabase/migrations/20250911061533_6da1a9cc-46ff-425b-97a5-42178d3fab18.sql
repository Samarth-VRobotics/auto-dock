-- Create a table for book a call requests
CREATE TABLE public.call_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  job_title TEXT,
  industry TEXT,
  message TEXT,
  preferred_time TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.call_requests ENABLE ROW LEVEL SECURITY;

-- Create policies for call requests
CREATE POLICY "Anyone can insert call requests" 
ON public.call_requests 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Users can view call requests" 
ON public.call_requests 
FOR SELECT 
USING (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_call_requests_updated_at
BEFORE UPDATE ON public.call_requests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();