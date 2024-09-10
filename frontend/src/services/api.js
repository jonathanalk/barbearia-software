// frontend/src/services/api.js
import axios from 'axios';

// Configurar a URL base da API para se comunicar com o backend
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api', // URL base da API
});

export default api;
