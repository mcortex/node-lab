const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const request = require('request')
//const apiKey = '2c0e792f585f3461a43ce40075dd0041'

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req,res) => {
  res.render('index')
})

app.post('/', (req,res) => {
  //res.render('index')
  console.log("Solicito el id: " + req.body.id)
  let id = req.body.id;
  let url = `http://localhost:8080/api/invoices/${id}`
  request(url, function (err, response, body) {
      if(err){
        res.render('index', {response: null, error: 'Error, please try again'});
      } else {
        let response = JSON.parse(body)
        if(response == undefined){
          res.render('index', {response: null, error: 'Error, please try again'});
        } else {
          let responseText = `La factura es ${response.ref2}!`;
          res.render('index', {response: responseText, error: null});
        }
      }
    });
})

app.listen(3000,()=> {
  console.log('app de ejemplo en el puerto 3000')
})
