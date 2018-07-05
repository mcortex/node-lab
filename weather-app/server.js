const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const request = require('request')
const apiKey = '2c0e792f585f3461a43ce40075dd0041'

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req,res) => {
  res.render('index')
})

app.post('/', (req,res) => {
  //res.render('index')
  //console.log(req.body.city)
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  request(url, function (err, response, body) {
      if(err){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weather = JSON.parse(body)
        if(weather.main == undefined){
          res.render('index', {weather: null, error: 'Error, please try again'});
        } else {
          let weatherText = `La temperatura es de ${weather.main.temp} °C en ${weather.name}!`;
          res.render('index', {weather: weatherText, error: null});
        }
      }
    });
})

app.listen(3000,()=> {
  console.log('app de ejemplo en el puerto 3000')
})
