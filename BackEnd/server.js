const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors')

app.use(cors());

app.get('/debts', function (req, res) {
  fs.readFile('datas.json', (err, data) =>{
    
    if(err) throw err;
    else{
      let d = JSON.parse(data);
      res.send(d['debts']);
    }
  })
})

app.get('/stocks', function (req, res) {
  fs.readFile('datas.json', (err, data) =>{
    
    if(err) throw err;
    else{
      let d = JSON.parse(data);
      res.send(d['stocks']);
    }
  })
})


app.listen(3000);