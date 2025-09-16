import { useEffect } from 'react';

// Media files to preload (using local assets)
const MEDIA_URLS = [
  "/team-video.mp4",
  // Add other local video files as needed
];

export const useMediaPreloader = () => {
  useEffect(() => {
    const preloadMedia = async () => {
      // Wait a bit for initial page load to complete
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Preload all media assets
      MEDIA_URLS.forEach((url) => {
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