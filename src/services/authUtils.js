// authUtils.js
export const isAuthenticated = () => {
    const storedToken = localStorage.getItem('token');
    return !!storedToken; // Return true if token exists, false otherwise
  };
  