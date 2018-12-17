const mongoose = require('mongoose');

const fichaShema = mongoose.Schema({
    pregunta:   String,
    respuestaC: String, 
    categoria:  String
},{
    timestamps:true
});

module.exports = mongoose.model('ficha',fichaShema);
