// Get the base URL for API requests
const getBaseUrl = () => {
  if (import.meta.env.PROD) {
    // In production, use the current domain
    return window.location.origin;
  }
  // In development, use localhost
  return 'http://localhost:3000';
};

export const API_URL = `${getBaseUrl()}/api`; 