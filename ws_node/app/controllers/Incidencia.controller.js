const Incidencia = require('../models/Incidencia.model.js');

//crear y salvar Incidencia

exports.create = (req,res)=>{

    //Validamos la Incicencia
    if (!req.body){
        console.log(req.body);
        return res.status(400).send({
            message:"incidencia vacia..."
        });
    }

    const incidencia = new Incidencia({

        alumno: req.body.alumno || "Sin nombre",
        grup: req.body.grup || "Sin grupo",
        profesor: req.body.profesor || "Sin profesor",
        horario: req.body.horario || "Sin horario",
        fechaIncidencia: req.body.fechaIncidencia || "Sin fecha",
        hora: req.body.hora || "Sin hora",
        gravedad: req.body.gravedad || "Sin gravedad"
        
    })

    incidencia.save().then(data =>{
        res.send(data);
    }).catch(err =>{
        res.status(500).send({
            message: err.message|| "Something was wrong creating incidencia"
        });
    });
};


// Obtener todas las incidencias
exports.findAll = (req,res) => {

    Incidencia.find().then(incidencia=>{
        res.send(incidencia);
    }).catch(err=>{
        res.status(500).send({
            message: err.message || "Error mientras se obtenian incidencias"
        });
    });

};


// Obtener una incidencia por Id
exports.findOne = (req,res) => {
Incidencia.findById(req.params.incidenciaId)
.then(incidencia=>{
    if (!incidencia){
        return res.status(404).send({
            message: "incidencia NOT FOUND con ID " +req.params.incidenciaId
        });
        }
        res.send(incidencia);
    }).catch(err=>{
        if(err.kind === 'ObjectId'){
            return res.status(404).send({
                message: "incidencia no encontrado con ese id :" +req.params.incidenciaId
            });
        }
         return res.status(500).send({
            message: "Tenemos problemas con ese id :" +req.params.incidenciaId
         });
    });
};


// Actualizar una incidencia
exports.update = (req, res) => {
// Validate Request
if(!req.body) {
    return res.status(400).send({
        message: "incidencia vacio"
    });
}

// Find note and update it with the request body
Incidencia.findByIdAndUpdate(req.params.incidenciaId, {
    alumno: req.body.alumno || "Sin nombre",
        grup: req.body.grup || "Sin grupo",
        profesor: req.body.profesor || "Sin profesor",
        horario: req.body.horario || "Sin horario",
        fechaIncidencia: req.body.fechaIncidencia || "Sin fecha",
        hora: req.body.hora || "Sin hora",
        gravedad: req.body.gravedad || "Sin gravedad"
}, {new: true})
.then(Incidencia => {
    if(!incidencia) {
        return res.status(404).send({
            message: "Incidencia not found with id " + req.params.incidenciaId
        });
    }
    res.send(incidencia);
}).catch(err => {
    if(err.kind === 'ObjectId') {
        return res.status(404).send({
            message: "Incidencia not found with id " + req.params.incidenciaId
        });                
    }
    return res.status(500).send({
        message: "Error updating user with id" + req.params.incidenciaId
    });
});
};


// Borrar una Incidencia

exports.delete = (req,res)=>{

    let incidenciaId = req.params.incidenciaId;
     
    Incidencia.findById(incidenciaId,(err,Incidencia)=>{
        if(err) res.status(500).send({message: `ERROR AL BORRAR LA INCIDENCIA: ${err}`})
    
    Incidencia.remove(err =>{
        if(err)res.status(500).send({message: `ERROR AL BORRAR LA INCIDENCIA: ${err}`})
        res.status(200).send({message: `LA INCIDENCIA A SIDO ELIMINADO:`})

    })    
    })
};
