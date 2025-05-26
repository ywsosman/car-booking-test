const getApiUrl = () => {
  if (import.meta.env.MODE === 'production') {
    // In production, use the same domain but with /api prefix
    return '/api';
  }
  // In development, use localhost
  return 'http://localhost:3000/api';
};

export const API_URL = getApiUrl(); 