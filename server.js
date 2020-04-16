//Importando ferramentas
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o App
const app = express();

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', 
{ 
  useNewUrlParser: true,
   useUnifiedTopology: true 
});

//Importando os models do banco de dados
requireDir('./src/models');

const Product = mongoose.model('Product');

//Primeira rota
app.get('/', (req, res) => {
  Product.create({
    title: 'React',
    description: 'Aplicacao front-end',
    url: 'www.github.com/users/Dizzysch'
  })

  return res.send("Serase deu?");
});

//Definindo porta da aplicacao
app.listen(3001);