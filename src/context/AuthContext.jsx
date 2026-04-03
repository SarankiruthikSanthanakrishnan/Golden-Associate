"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();

  useEffect(() => {
    if (user) {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  }, [user]);

  const login = (userData) => {
    const { username } = userData;
    // For demo: Accept any non-empty username/password and default to admin
    if (username) {
      setUser({ username, role: 'admin' });
      setError(null);
      router.push('/home');
      return { success: true };
    } else {
      setError('Please enter a valid email');
      return { success: false, error: 'Please enter a valid email' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setError(null);
    router.push('/');
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
