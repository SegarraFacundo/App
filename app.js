var express = require('express'),
app = express();

//Configuración
app.configure(function(){

	//Localización de los ficheros estáticos
	app.use(express.static(__dirname + '/public'));
	
	//Muestra un log de todos los request en la consola
	app.use(express.logger('dev'));

	//Permite cambiar el HTML con el método POST
	app.use(express.bodyParser());
	
	//Simula DELETE y PUT
	app.use(express.methodOverride());
});

app.get('*', function(req,res){
	res.sendfile('./public/index.html');
});

//Inicializamos el puerto
var port = process.env.PORT || 8080;

//Escucha en el puerto default de Heroku o 8080 y corre el server
app.listen(port, function(){
	console.log('App listening on port ' + port);
});
