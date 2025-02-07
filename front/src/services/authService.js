import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth'; // Ruta del backend

export const register = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Error en el registro:', error.response?.data || error.message);
    return null;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/signin`, { email, password });
    return response.data; // Retorna el token
  } catch (error) {
    console.error('Error en el login:', error.response?.data || error.message);
    return null;
  }
};
