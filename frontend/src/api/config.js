// Get the base URL for API requests
const getBaseUrl = () => {
  if (import.meta.env.PROD) {
    // In production, use the Vercel deployment URL or current domain
    const deploymentUrl = import.meta.env.VITE_API_URL || window.location.origin;
    return deploymentUrl;
  }
  // In development, use localhost
  return 'http://localhost:3000';
};

export const API_URL = `${getBaseUrl()}/api`; 