'use strict'

var express = require('express');
var bodyParser = require('body.parser');

var app = express();

//cargar rutas


// cargar middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// cargar cors


//cargar rutas

// exportar
module.exports = app;