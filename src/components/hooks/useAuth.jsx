// src/components/hooks/useAuth.js
import { useSelector } from 'react-redux';

// Custom hook to manage authentication status
const useAuth = () => {
  // Assume authentication state is stored in Redux
  const token = useSelector(state => state.auth.token);
  const isAuthenticated = !!token; // Convert token to boolean

  return { isAuthenticated };
};

export default useAuth;
