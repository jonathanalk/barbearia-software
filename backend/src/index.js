// backend/src/index.js
const express = require('express');
const cors = require('cors'); // Importar o CORS
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes'); // Certifique-se de que está importando as rotas corretamente

const app = express();

// Conectar ao MongoDB
connectDB();

// Middleware para JSON
app.use(express.json());

// Habilitar o CORS
app.use(cors());

// Definir rotas corretamente
app.use('/api/users', userRoutes); // Certifique-se de que 'userRoutes' é uma função router e não um objeto

// Definir uma rota "Hello World"
app.get('/api/hello', (req, res) => {
    res.send('Hello World from the backend123!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
