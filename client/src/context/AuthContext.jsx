// src/context/AuthContext.jsx

import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // ✅ Login function with email & password parameters
  const login = async (email, password) => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/auth/login",
        { email, password },
        { withCredentials: true }
      );
      if (res.data.user) {
        setUser(res.data.user);
      } else {
        throw new Error(res.data.message || "Login failed");
      }
    } catch (error) {
      throw error;
    }
  };

  // ✅ Register function with name, email, password parameters
  const register = async (name, email, password) => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/auth/register",
        { name, email, password },
        { withCredentials: true }
      );
      if (res.data.user) {
        setUser(res.data.user);
      } else {
        throw new Error(res.data.message || "Registration failed");
      }
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await axios.get("http://localhost:4000/api/auth/logout", {
        withCredentials: true,
      });
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/auth/profile",
          { withCredentials: true }
        );
        if (res.data.user) {
          setUser(res.data.user);
        }
      } catch (error) {
        setUser(null); // Not logged in
      }
    };
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
