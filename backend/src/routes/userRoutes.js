// backend/src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { getUsers, createUser } = require('../controllers/userController');

// Definindo rotas com callbacks válidos
router.get('/', getUsers);
router.post('/', createUser);

module.exports = router; // Certifique-se de exportar o router corretamente
