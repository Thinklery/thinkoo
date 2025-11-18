import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '../utils/supabaseClient';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextType = {
  user: any;
  login: (email: string, password: string) => void;
  logout: () => void;
  signUp: (email: string, password: string) => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getSession = async () => {
      const session = await AsyncStorage.getItem('session');
      if (session) {
        setUser(JSON.parse(session));
      }
    };

    getSession();
  }, []);

  const login = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (data) {
      await AsyncStorage.setItem('session', JSON.stringify(data));
      setUser(data);
    }
    if (error) {
      console.error(error.message);
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    await AsyncStorage.removeItem('session');
    setUser(null);
  };

  const signUp = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (data) {
      console.log('Sign up successful:', data);
    }
    if (error) {
      console.error(error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};
