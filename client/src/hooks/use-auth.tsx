import { useState, useEffect } from 'react';
import { User, getUser, saveUser, clearUser, submitToGoogleForm } from '@/lib/auth';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = getUser();
    if (savedUser) {
      setUser(savedUser);
      setIsLoggedIn(true);
    }
    setIsLoading(false);
  }, []);

  const login = async (userData: User): Promise<boolean> => {
    try {
      setIsLoading(true);
      const success = await submitToGoogleForm(userData);
      
      if (success) {
        setUser(userData);
        setIsLoggedIn(true);
        saveUser(userData);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    clearUser();
  };

  return {
    user,
    isLoggedIn,
    isLoading,
    login,
    logout
  };
}
