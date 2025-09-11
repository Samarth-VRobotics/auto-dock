import { useEffect } from 'react';

// All media assets across the site
const MEDIA_ASSETS = [
  // Hero video
  "https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/0001-1199.mov",
  
  // VideoSlideshow videos
  "https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/Photo%20album%20-1.mp4",
  "https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/Photo%20album%20-2.mp4",
  "https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/Photo%20album%20-ASRS.mp4",
  "https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/Photo%20album%20-4.mp4",
  
  // AutoDockInAction videos
  "https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/Step%201%20Truck%20Arrival%20&%20Docking.mp4",
  "https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/Step%202%20AMR%20Alignment%20&%20Dock%20Preparation.mp4",
  "https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/Step%203%20Automated%20Truck%20Unloading.mp4",
  "https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/Step%204%20End-of-Line%20Handling%20&%20Automatic%20Stacking.mp4",
  
  // OurTeam video
  "https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/ASRS%20timelasp.mp4",
  
  // AutoDockAdvantage GIFs
  "https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/Always%20Ready,%20Always%20On.gif",
  "https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/Scales%20Without%20Slowing%20Down.gif",
  "https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/AI%20That%20Understands%20Logistics.gif",
  "https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/Enterprise%20Integration,%20Simplified.gif",
  "https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/Built-In%20Safety.gif",
  "https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/ROI%20on%20Multiple%20Fronts.gif",
];

export const useMediaPreloader = () => {
  useEffect(() => {
    const preloadMedia = async () => {
      // Wait a bit for initial page load to complete
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Preload all media assets
      MEDIA_ASSETS.forEach((url) => {
        // For videos
        if (url.includes('.mp4') || url.includes('.mov') || url.includes('.webm')) {
          const video = document.createElement('video');
          video.preload = 'auto';
          video.src = url;
          video.load();
        }
        // For GIFs and images
        else if (url.includes('.gif') || url.includes('.jpg') || url.includes('.png')) {
          const img = new Image();
          img.src = url;
        }
      });
    };

    preloadMedia();
  }, []);
};