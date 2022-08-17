const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

app.get('/h', function (req, res) {
  res.send('<h1>Hello World<h1>');
})

app.get('/g', function (req, res) {
    res.send('<h1>Hola<h1>');
  })

app.get('*', function (req, res){
    if(res.status(400)){
        res.send('<h1>Link sbagliato<h1>');
    }
})

app.listen(3000);