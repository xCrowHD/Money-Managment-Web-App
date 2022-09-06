const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/trans/trn', function (req, res){
  fs.readFile('datas.json', (err, data)=>{
    if(err) throw err;
    else{
      let d = JSON.parse(data);
      let dJSON = d['tr']['transactionNumber'];
      res.send({
        "n": dJSON
      });
    }
  })
})

app.post('/trans/addtr', function(req, res){
  let body = req.body;
  res.end();
  let newarr = [body['name'], body['month'], body['day'], body['money'],
                body['earn_spent'], body['type'], body['descr']];
  
  fs.readFile('datas.json', (err, data)=>{
    if(err) throw err;
    else{
      let d = JSON.parse(data);
      let dJSON = d['tr']['transactions'];
      dJSON.push(newarr);

      fs.writeFile('datas.json', JSON.stringify(d, null, 2), (err)=>{
        if(err){
          console.log('something went wrong')
        }
      })

    }
  })
})

app.post('/debts/adddebt', function(req, res){
  let body = req.body;
  res.end();
  
  fs.readFile('datas.json', (err, data)=>{
    if(err) throw err;
    else{

      let d = JSON.parse(data);
      let dJSON = d['debts'];
      dJSON[`${body['name']}`] = [body['name'], body['total'], body['payed']];
      console.log(d);

      fs.writeFile('datas.json', JSON.stringify(d, null, 2), (err1)=>{
        if(err1) throw err1;
      })
    }
  })

})

app.get('/debts/loaddebts', function (req, res) {
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
  res.end();
  
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

      fs.writeFile('datas.json', JSON.stringify(d, null, 2), (err1)=>{
        if(err1) throw err1;
      })
    }
  })

})

app.post('/stocks/addstock',function(req, res){
  let body = req.body;
  res.end();
  let p = body['sym']

  fs.readFile('datas.json', (err, data) =>{
    if(err) throw err;
    else{
      let d = JSON.parse(data);
      let dJSON = d['stocks'];
      dJSON.push(p);
      fs.writeFile('datas.json', JSON.stringify(d, null, 2), (err1)=>{
        if(err1) throw err1;
      })
    }
  })
})

app.get('/stocks/loadstock', function (req, res) {
  fs.readFile('datas.json', (err, data) =>{
    
    if(err) throw err;
    else{
      let d = JSON.parse(data);
      res.send(d['stocks']);
    }
  })
})

app.listen(3000);