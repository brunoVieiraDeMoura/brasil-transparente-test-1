import React, { useContext, useState } from "react";
import { login } from "../services/api";
import { AuthContext } from "../context/AuthContext";

//Login
const Login = () => {
  // definindo state form
  const { login: authLogin } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //Função form change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // função envio form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // function login e save login
      const user = await login(formData);
      authLogin(user.user, user.token);
      console.log("Usuário logado", user);
    } catch (err) {
      console.error("Erro ao logar", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Senha"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
