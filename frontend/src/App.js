import React, { useEffect, useState } from 'react';
import axios from './services/api'; // Usando o serviço de API configurado

function App() {
  const [message, setMessage] = useState(''); // Estado para armazenar a mensagem do backend
  const [error, setError] = useState(''); // Adicionar estado para erros

  useEffect(() => {
    // Fazer uma requisição GET para a rota "Hello World" do backend
    axios.get('/hello')
      .then(response => {
        setMessage(response.data); // Armazenar a resposta na variável de estado
      })
      .catch(error => {
        console.error('Erro ao buscar mensagem do backend:', error); // Logar o erro no console
        setError('Erro ao conectar com o backend'); // Atualizar o estado do erro para exibição
      });
  }, []);

  return (
    <div className="App">
      <h1>Hello World from the frontend!</h1>
      <p>Mensagem do backend: {message}</p> {/* Exibir a mensagem recebida do backend */}
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Exibir a mensagem de erro se houver */}
    </div>
  );
}

export default App;
