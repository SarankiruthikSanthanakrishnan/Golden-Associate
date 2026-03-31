import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();
const AUTH_STORAGE_KEY = 'goldenassociate_user';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem(AUTH_STORAGE_KEY);
      return storedUser ? JSON.parse(storedUser) : null;
    } catch {
      return null;
    }
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  }, [user]);

  const login = (userData) => {
    const { username, password } = userData;
    if (
      username === 'admin@goldenassociate.com' &&
      password === 'golden@2026'
    ) {
      setUser({ username, role: 'admin' });
      setError(null);
      navigate('/home');
      return { success: true };
    } else {
      setError('Invalid username or password');
      return { success: false, error: 'Invalid username or password' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setError(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ login, logout, user, error, setError }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside the AuthProvider');
  }
  return context;
};
