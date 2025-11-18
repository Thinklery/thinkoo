import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '../utils/supabaseClient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from 'react-native';

type AuthContextType = {
  user: any;
  login: (email: string, password: string) => void;
  logout: () => void;
  signUp: (email: string, password: string) => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true); // To handle loading state

  // Check for session on app start
  useEffect(() => {
    const getSession = async () => {
      try {
        if (AsyncStorage === null) {
          console.error('AsyncStorage is not available');
          setUser(null);
          return;
        }
        const session = await AsyncStorage.getItem('session');
        if (session) {
          setUser(JSON.parse(session)); // Set user if session exists
        } else {
          setUser(null); // No session found
        }
      } catch (error) {
        console.error('Error retrieving session from AsyncStorage:', error);
      } finally {
        setLoading(false); // Finished loading
      }
    };

    getSession();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (data) {
        await AsyncStorage.setItem('session', JSON.stringify(data)); // Store session
        setUser(data); // Set user in context
      }
      if (error) {
        throw error;
      }
    } catch (err: any) {
      console.error('Login error:', err.message);
    }
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      await AsyncStorage.removeItem('session'); // Clear session
      setUser(null); // Clear user data
    } catch (err: any) {
      console.error('Logout error:', err.message);
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (data) {
        console.log('Sign up successful:', data);
        await AsyncStorage.setItem('session', JSON.stringify(data)); // Store session
        setUser(data); // Set user in context
      }
      if (error) {
        throw error;
      }
    } catch (err: any) {
      console.error('Sign up error:', err.message);
    }
  };

  if (loading) {
    return <Text>Loading...</Text>; // Optionally, render a loading state while session is being fetched
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};
