import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { config } from '../config';

interface AuthContextType {
  token: string | null;
  user: any; // Puedes crear una interfaz más estricta para el usuario
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

interface DecodedToken {
  sub: string;
  username: string;
  name: string;
  email: string;
  iat: number;
  exp: number;
}

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (token: string) => void;
  logout: () => void;
  user: { id: string; name: string; email: string; } | null;
}

export const AuthContext = createContext<AuthState | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<{ id: string; name: string; email: string; } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      try {
        const decoded = jwtDecode<DecodedToken>(token);
        // Verificar si el token ha expirado
        if (decoded.exp * 1000 > Date.now()) {
          setIsAuthenticated(true);
          setUser({ id: decoded.sub, name: decoded.name, email: decoded.email });
        } else {
          // Token expirado
          localStorage.removeItem('accessToken');
        }
      } catch (error) {
        console.error("Failed to decode token", error);
        localStorage.removeItem('accessToken');
      }
    }
    setIsLoading(false);
  }, []);

  const login = (token: string) => {
    localStorage.setItem('accessToken', token);
    const decoded = jwtDecode<DecodedToken>(token);
    setIsAuthenticated(true);
    setUser({ id: decoded.sub, name: decoded.name, email: decoded.email });
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 