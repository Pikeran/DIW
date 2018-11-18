// Importando librerias:
const express = require('express');
const path = require('path');

// inicializamos la app:
const app = express(); 

// Sirviendo ficheros desde el server:
app.use(express.static(path.join(__dirname,'sirviendo')));

app.listen(4242,()=>{
    console.log("servidor funcionando en 4242");
});