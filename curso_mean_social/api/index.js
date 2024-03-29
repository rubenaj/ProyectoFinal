'user strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;

//conexion database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/curso_mean_social', { useMongoClient: true})
.then(() => {
    console.log("La conexion a la base se ha realizado correctamente");

    //crear servidor
    app.listen(port, () => {
        console.log(" servidor corriendo en http://localhost:3800");
    });
})
.catch(err => console.log(err));