import React, { createContext, useState, useEffect } from "react";

//Gerenciamento de Estado com Context API
export const AuthContext = createContext();

//Component de provedor de auth
export const AuthProvider = ({ children }) => {
  // nao autenticado setado default
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
    token: null,
  });

  //Carregando estato autenticação localstorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (token && user) {
      setAuthState({
        isAuthenticated: true,
        user: user,
        token: token,
      });
    }
  }, []);

  // atualizando autenticação e armazenamento localstorage
  const login = (user, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    setAuthState({
      isAuthenticated: true,
      user: user,
      token: token,
    });
  };

  //logout , limpando estado e removendo localstorage
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAuthState({
      isAuthenticated: false,
      user: null,
      token: null,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
