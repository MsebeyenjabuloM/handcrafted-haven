"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

type User = {
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;

  login: (
    email: string,
    password: string
  ) => void;

  register: (
    name: string,
    email: string,
    password: string
  ) => void;

  logout: () => void;
};

const AuthContext =
  createContext<AuthContextType | null>(
    null
  );

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] =
    useState<User | null>(null);
  
    useEffect(() => {
  const storedUser =
    localStorage.getItem(
      "handcraftedHavenUser"
    );

  if (storedUser) {
    setUser(JSON.parse(storedUser));
  }
}, []);

  const login = (
  email: string,
  password: string
) => {
  const loggedInUser = {
    name: email.split("@")[0],
    email,
  };

  setUser(loggedInUser);

  localStorage.setItem(
    "handcraftedHavenUser",
    JSON.stringify(loggedInUser)
  );
};

const register = (
  name: string,
  email: string,
  password: string
) => {
  const newUser = {
    name,
    email,
  };

  setUser(newUser);

  localStorage.setItem(
    "handcraftedHavenUser",
    JSON.stringify(newUser)
  );
};

  const logout = () => {
  setUser(null);

  localStorage.removeItem(
    "handcraftedHavenUser"
  );
};

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context =
    useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}