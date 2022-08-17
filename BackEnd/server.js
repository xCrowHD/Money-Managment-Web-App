const express = require('express');
const fs = require('fs');
const app = express();


app.get('/full', function (req, res) {
  fs.readFile('datas.json', (err, data) =>{
    
    if(err) throw err;
    else{
      let d = JSON.parse(data);
      res.send(d);
    }
  })
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