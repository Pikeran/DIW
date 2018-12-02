const mongoose = require('mongoose');

const fichaShema = mongoose.Schema({
    pregunta:   String,
    respuesta1: String,
    respuesta2: String,
    respuesta3: String,
    respuestaC: Number,  
    categoria:  String
},{
    timestamps:true
});

module.exports = mongoose.model('ficha',fichaShema);
