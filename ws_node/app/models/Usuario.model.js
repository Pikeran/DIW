const mongoose = require('mongoose');

const usuarioShema = mongoose.Schema({
    nombre_usuario: String,
    contraseña: String,
    nombre: String,
    edad: Number,
    localidad: String
},{
    timestamps:true
});

module.exports = mongoose.model('usuario',usuarioShema);