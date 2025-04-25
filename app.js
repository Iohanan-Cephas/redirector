const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let redirectUrl = "https://google.com";

app.get('/', (req, res) => {
  res.redirect(redirectUrl);
});

app.get('/admin', (req, res) => {
  res.render('admin', { redirectUrl });
});

app.post('/update', (req, res) => {
  const newUrl = req.body.newUrl;
  redirectUrl = newUrl;
  res.send(`Link atualizado para: ${redirectUrl}`);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
