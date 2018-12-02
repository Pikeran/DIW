// Importando librerias:
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// inicializamos la app:
const app = express(); 

//Utilizaremos body-parser para "parsear lo que nos pidan";
app.use(bodyParser.urlencoded({
    extended:true
}));

//Parseamos los jsones
app.use(bodyParser.json());

// Sirviendo ficheros desde el server:
app.use(express.static(path.join(__dirname,'sirviendo')));

//Nos conectamos con la base de datos
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Conectando en si mismo
mongoose.connect(dbConfig.url,{
    useNewUrlParser:true}).then(()=>{
        console.log(" * Cargada y preparada");
    }).catch(err => {
        console.log(" Algo ha pasado...saliendo : ",err);
        process.exit();
    });

// Vamos a definir un "punto de inicio" :
app.get('/',(req,res)=>{
    res.json({"message":"Parte BACK del programa"});
});

// Require Usuarios routes : 
require('./app/routes/Ficha.routes.js')(app);


app.listen(4242,()=>{
    console.log("servidor funcionando en 4242");
});