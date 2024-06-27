import axios from "axios";

//base req backend
const API_URL = "http://localhost:5000/api";

//function para registrar um novo usuário
export const register = async (userData) => {
  try {
    //req POST
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    console.error("erro ao registrar", error.response || error.message);
    throw error.response || error;
  }
};

//function para login
export const login = async (userData) => {
  try {
    // faz um req post para loggin
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
