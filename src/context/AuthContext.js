import React, { createContext, useState } from "react";

//Gerenciamento de Estado com Context API
export const AuthContext = createContext();

//Component de provedor de auth
export const AuthProvider = ({ children }) => {
  // nao autenticado setado default
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
  });
  // atualizando autenticação
  const login = (user) => {
    setAuthState({
      isAuthenticated: true,
      user: user,
    });
  };
  //logout
  const logout = () => {
    setAuthState({
      isAuthenticated: false,
      user: null,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
