const express = require('express');
const app = express();
const port = 3000;

let currentUrl = 'https://www.instagram.com/jperez.me/';

app.use(express.json()); // pra aceitar JSON no body

// Rota de redirecionamento
app.get('/', (req, res) => {
  res.redirect(currentUrl);
});

// Rota para atualizar o link
app.post('/update', (req, res) => {
  const { newUrl } = req.body;
  if (typeof newUrl === 'string' && newUrl.startsWith('http')) {
    currentUrl = newUrl;
    res.send(`Link atualizado para: ${currentUrl}`);
  } else {
    res.status(400).send('URL inválida');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
