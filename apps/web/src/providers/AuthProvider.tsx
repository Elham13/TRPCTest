"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";

type AuthContextType = {
  user: null;
  setUser: React.Dispatch<React.SetStateAction<null>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<null>(null);
  const segment = useSelectedLayoutSegment();
  const router = useRouter();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}

export default AuthProvider;
