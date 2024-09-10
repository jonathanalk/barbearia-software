import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Adicione esta linha se tiver um arquivo de estilo para o básico

// Criar o root para renderizar o componente App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
