/**
 * CDN utility functions for asset management
 */

// Get the base CDN URL from environment or fallback to relative path
export const getCDNBaseUrl = (): string => {
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    return ''; // Use relative paths in development
  }
  return import.meta.env.VITE_CDN_BASE_URL || '';
};

// Helper function to resolve asset URLs with CDN support
export const getAssetUrl = (assetPath: string): string => {
  const cdnBase = getCDNBaseUrl();
  
  // If CDN base URL is provided and we're not in development
  if (cdnBase && !assetPath.startsWith('http')) {
    // Ensure proper URL construction
    const cleanBase = cdnBase.endsWith('/') ? cdnBase.slice(0, -1) : cdnBase;
    const cleanPath = assetPath.startsWith('/') ? assetPath : `/${assetPath}`;
    return `${cleanBase}${cleanPath}`;
  }
  
  return assetPath;
};

// Preload critical assets with CDN support
export const preloadAsset = (assetPath: string, type: 'image' | 'font' | 'style' = 'image'): void => {
  const url = getAssetUrl(assetPath);
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = url;
  
  switch (type) {
    case 'image':
      link.as = 'image';
      break;
    case 'font':
      link.as = 'font';
      link.crossOrigin = 'anonymous';
      break;
    case 'style':
      link.as = 'style';
      break;
  }
  
  document.head.appendChild(link);
};

// Cache busting for CDN assets
export const getCachedAssetUrl = (assetPath: string, version?: string): string => {
  const baseUrl = getAssetUrl(assetPath);
  const separator = baseUrl.includes('?') ? '&' : '?';
  const cacheParam = version || Date.now().toString();
  
  return `${baseUrl}${separator}v=${cacheParam}`;
};