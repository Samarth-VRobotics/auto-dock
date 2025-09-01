-- Add the in-house demo video to the videos table
INSERT INTO public.videos (
  title,
  description,
  file_path,
  is_active
) VALUES (
  'AutoDock In-House Demo',
  'See AutoDock in action with our comprehensive demonstration of warehouse dock automation capabilities.',
  'In-house version.mp4',
  true
);