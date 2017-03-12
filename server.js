let express = require('express');
let app = express();
let port = 8080;

app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index');
});

let months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


app.get('/:date', function (req, res) {
  let param = req.params.date;
  let time;
  if (isNaN(param))
    time = param;
  else
    time = Number(param) * 1000;
  
  let d = new Date(time);
  let output = {
    unix: d.getTime() / 1000,
  };
  if (months[d.getMonth()])
    output.natural = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  else
    output.natural = null;
    
  res.end(JSON.stringify(output));
});

app.listen(port, function () {
  console.log('Example app listening on port '+port+'!');
});