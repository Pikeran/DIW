const mongoose = require('mongoose');

const usuarioShema = mongoose.Schema({
    nombre_usuario: String,
    contraseña: String,
    nombre: String,
    autoridad:String,
    edad: Number,
    localidad: String,
    correo: String  
},{
    timestamps:true
});

module.exports = mongoose.model('usuario',usuarioShema);
