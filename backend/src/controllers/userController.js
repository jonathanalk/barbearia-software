// backend/src/controllers/userController.js

// Exemplo de uma função de controle que deve ser exportada
const getUsers = (req, res) => {
    res.json({ message: "Lista de usuários" });
};

const createUser = (req, res) => {
    res.json({ message: "Usuário criado" });
};

// Exportar as funções corretamente
module.exports = {
    getUsers,
    createUser,
};
