//Import config
var config= require('./config.json');
var express= require('express');
var serveStatic= require('serve-static');
var bodyParser= require('bosy-parser');
var multer=require('multer');
var massive=require("massive");
//

var massiveInstance= massive.connectSync({connectionString: connectionString});
var db;
//Inicio
var app=express();
var startExpress=function(){ app.listen(config.express.port);
db=app.get('db');}
var initialize= function(){startExpress()}

//Error
var handleError=function(res) {return function(err){
	console.log(err);
	res.send(500,{error:err.menssage});}}
//Regresar contenido de la tabla 
var list = function(request,res,next){db.Porfile.findDoc(1, function(err,doc){
	if (err) {handleError};
	console.log(doc.data);
	res.json({data:doc.data}); });
}
//Actualizar documento
var update=function (reques,res,next){ var newDoc= reques.body.data;
db.Porfile.saveDoc({id:1,data:newDoc}, function(err,response)
	{if (err){handleError(res)}; console.log(response) res.json({data: response});
}); 
}

//Express Setup
// Data parsing 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(multer());

app.route('/api/list').get(list); app.route('/api/update').post(update);

app.use(serveStatic('./public'));

app.set('db',massiveInstance); initialize()