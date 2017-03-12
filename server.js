let express = require('express');
let app = express()
let port = 8080;

app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index');
})

app.listen(port, function () {
  console.log('Example app listening on port '+port+'!')
})