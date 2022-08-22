const express = require('express');
const fs = require('fs');
const cors = require('cors');
const { stringify } = require('querystring');
const app = express();



app.use(cors());
app.use(express.json());

app.get('/debts', function (req, res) {
  fs.readFile('datas.json', (err, data) =>{
    
    if(err) throw err;
    else{
      let d = JSON.parse(data);
      res.send(d['debts']);
      
    }
  })
})

app.post('/debts/payedamount', function(req, res){
  let body = req.body;
  res.send(body);
  
  fs.readFile('datas.json', (err, data)=>{
    if(err) throw err;
    else{

      let d = JSON.parse(data);
      let dJSON = d['debts'];

      for(const [key, value] of Object.entries(dJSON)){
        if(key == body['id']){
          value[2] = body['sum'];
        }
      }
      console.log(d);
      
      fs.writeFile('datas.json', JSON.stringify(d, null, 2), (err1)=>{
        if(err1) throw err1;
      })
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