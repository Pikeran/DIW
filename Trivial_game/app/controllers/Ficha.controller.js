const Ficha = require('../models/Ficha.model.js');

//crear y salvar

exports.create = (req,res)=>{

    //Validamos la ficha
    if (!req.body){
        console.log(req.body);
        return res.status(400).send({
            message:"Ficha vacia..."
        });
    }

    const ficha = new Ficha({

        pregunta: req.body.pregunta || "Pregunta vacia",
        respuesta1: req.body.respuesta1 || "",
        respuesta2: req.body.respuesta2 || "",
        respuesta3: req.body.respuesta3 || "",
        respuestaC: req.body.respuestaC || 0,
        categoria: req.body.categoria || "Sin categoria"
    })

    ficha.save().then(data =>{
        res.send(data);
    }).catch(err =>{
        res.status(500).send({
            message: err.message|| "Something was wrong creating ficha"
        });
    });
};

// Obtener todos las preguntas
exports.findAll = (req,res) => {

    Ficha.find().then(ficha=>{
        res.send(ficha);
    }).catch(err=>{
        res.status(500).send({
            message: err.message || "Error mientras se obtenian las fichas"
        });
    });

};


// Obtener la ficha por Id
exports.findOne = (req,res) => {
Ficha.findById(req.params.fichaId)
.then(ficha=>{
    if (!ficha){
        return res.status(404).send({
            message: "ficha NOT FOUND con ID " +req.params.fichaId
        });
        }
        res.send(ficha);
    }).catch(err=>{
        if(err.kind === 'ObjectId'){
            return res.status(404).send({
                message: "ficha no encontrado con esa id :" +req.params.fichaId
            });
        }
         return res.status(500).send({
            message: "Tenemos problemas con ese id :" +req.params.fichaId
         });
    });
};




// Actualizar una ficha
exports.update = (req, res) => {
// Validate Request
if(!req.body) {
    return res.status(400).send({
        message: "ficha vacia"
    });
}

// Find note and update it with the request body
Ficha.findByIdAndUpdate(req.params.fichaId, {
    	pregunta: req.body.pregunta || "Pregunta vacia",
        respuesta1: req.body.respuesta1 || "",
        respuesta2: req.body.respuesta2 || "",
        respuesta3: req.body.respuesta3 || "",
        respuestaC: req.body.respuestaC || 0,
        categoria: req.body.categoria || "Sin categoria"
}, {new: true})
.then(Ficha => {
    if(!ficha) {
        return res.status(404).send({
            message: "ficha not found with id " + req.params.fichaId
        });
    }
    res.send(ficha);
}).catch(err => {
    if(err.kind === 'ObjectId') {
        return res.status(404).send({
            message: "Ficha not found with id " + req.params.fichaId
        });                
    }
    return res.status(500).send({
        message: "Error updating ficha with id" + req.params.fichaId
    });
});
};

// Borrar una ficha 

exports.delete = (req,res)=>{

    let fichaId = req.params.fichaId;
     
    Ficha.findById(fichaId,(err,Ficha)=>{
        if(err) res.status(500).send({message: `ERROR AL BORRAR LA FICHA: ${err}`})
    
    Ficha.remove(err =>{
        if(err)res.status(500).send({message: `ERROR AL BORRAR LA FICHA: ${err}`})
        res.status(200).send({message: `LA FICHA A SIDO ELIMINADA:`})

    })    
    })
};
