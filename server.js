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
	