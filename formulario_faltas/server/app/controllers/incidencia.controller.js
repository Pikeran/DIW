const Incidencia = require('../models/incidencia.model.js');

//crear y salvar

exports.create = (req,res)=>{

    //Validamos la Incicencia
    if (!req.body){
        console.log(req.body);
        return res.status(400).send({
            message:"Incidencia vacia..."
        });
    }

    const ocurrencia = new Incidencia({

        alumno: req.body.alumno || "Sin nombre",
        grup: req.body.grup || "Sin grupo",
        profesor: req.body.profesor || "Sin profesor",
        horario: req.body.horario || "Sin horario",
        fechaIncidencia: req.body.fechaIncidencia || "Sin fecha",
        hora: req.body.hora || "Sin hora",
        gravedad: req.body.gravedad || "Sin gravedad"
    })

    ocurrencia.save().then(data =>{
        res.send(data);
    }).catch(err =>{
        res.status(500).send({
            message: err.message|| "Something was wrong creating Incidencia"
        });
    });
};

// Obtener todos los investigadores
exports.findAll = (req,res) => {

    Incidencia.find().then(analista=>{
        res.send(analista);
    }).catch(err=>{
        res.status(500).send({
            message: err.message || " Algo fue mal mientras los capturabamos a todos"
        });
    });

};


// Obtener un investigador por Id
exports.findOne = (req,res) => {
Incidencia.findById(req.params.incidenciaId)
.then(ocurrencia=>{
    if (!ocurrencia){
        return res.status(404).send({
            message: "Incidencia NOT FOUND con ID " +req.params.incidenciaId
        });
        }
        res.send(ocurrencia);
    }).catch(err=>{
        if(err.kind === 'ObjectId'){
            return res.status(404).send({
                message: "Incidencia no encontrado con ese id :" +req.params.incidenciaId
            });
        }
         return res.status(500).send({
            message: "Tenemos NOSOTROS problemas con ese id :" +req.params.incidenciaId
         });
    });
};




// Actualizar un investigador
exports.update = (req, res) => {
// Validate Request
if(!req.body) {
    return res.status(400).send({
        message: "analista vacio"
    });
}

// Find note and update it with the request body
Incidencia.findByIdAndUpdate(req.params.incidenciaId, {
    alumno: req.body.nombre || "Sin nombre",
    grup: req.body.grup || "Sin grupo",
    profesor: req.body.profesor || "Sin profesor",
    horario: req.body.horario || "Sin horario",
    fechaIncidencia: req.body.fechaIncidencia || "Sin fecha",
    hora: req.body.hora || "Sin hora",
    gravedad: req.body.gravedad || "Sin gravedad"
}, {new: true})
.then(Incidencia => {
    if(!ocurrencia) {
        return res.status(404).send({
            message: "Incidencia not found with id " + req.params.incidenciaId
        });
    }
    res.send(ocurrencia);
}).catch(err => {
    if(err.kind === 'ObjectId') {
        return res.status(404).send({
            message: "Incidencia not found with id " + req.params.incidenciaId
        });                
    }
    return res.status(500).send({
        message: "Error updating Incidencia with id " + req.params.incidenciaId
    });
});
};

// Borrar un investigador 
exports.delete = (req,res)=>{
Incidencia.findByIdAndRemove(req.params.incidenciaId)
.then(ocurrencia => {
    if(!ocurrencia) {
        return res.status(404).send({
            message: "Incidencia no encontrado " + req.params.incidenciaId
        });
    }
    res.send({message: "Pero madre mia willy"});
}).catch(err => {
    if(err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
            message: "Incidencia not found with id " + req.params.incidenciaId
        });                
    }
    return res.status(500).send({
        message: "No podemos eliminar esa Incidencia with id " + req.params.incidenciaId
    });
});
};