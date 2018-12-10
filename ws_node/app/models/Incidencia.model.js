const mongoose = require('mongoose');

const IncidenciaShema = mongoose.Schema({
    alumno: String,
    grup: String,
    profesor: String,
    horario: String,
    fechaIncidencia:Date, 
    hora: String,
    gravedad: String
},{
    timestamps:true
});

module.exports = mongoose.model('analista',IncidenciaShema);