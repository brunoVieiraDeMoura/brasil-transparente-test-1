import React, { useState } from "react";
import { register } from "../services/api";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  //state para formulario
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  // function para manupular dados do form
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //funcao para lidar com envio de form
  const handleSubmit = async (e) => {
    e.preventDeault();
    try {
      const newUser = await register(formData);
      login(newUser.user, newUser.token);
      console.log("Usuario Registrado", newUser);
    } catch (err) {
      console.error("Erro ao registrar", err);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Nome de usuário"
        value={formData.username}
        onChange={handleChange}
      />
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
      <button type="submit">Registrar</button>
    </form>
  );
};

export default Register;
