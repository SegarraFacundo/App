var express = require('express')
var app = express()

app.use(express.static('./public'));

var puerto = process.env.PORT || 3000;

var server = app.listen(puerto, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})