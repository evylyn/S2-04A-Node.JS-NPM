// server.js

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000;

// Habilitar o CORS para todas as origens
app.use(cors());

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Servidor Node.js com CORS habilitado na porta 8000.');
});

// Iniciar o servidor na porta 8000
app.listen(PORT, () => {
  console.log(`Servidor está executando na porta ${PORT}`);
});
