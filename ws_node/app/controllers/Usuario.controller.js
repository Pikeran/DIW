const Usuario = require('../models/Usuario.model.js');

//crear y salvar

exports.create = (req,res)=>{

    //Validamos la Incicencia
    if (!req.body){
        console.log(req.body);
        return res.status(400).send({
            message:"Usuario vacio..."
        });
    }

    const usuario = new Usuario({

        nombre_usuario: req.body.nombre_usuario || "sin nombre de usuario",
        contraseña: req.body.contraseña || "sin contraseña",
        nombre: req.body.nombre || "Sin nombre",
        edad: req.body.edad || "No especificado",
        localidad: req.body.localidad || "No especificado",
        correo: req.body.correo || "Sin correo",
    })

    usuario.save().then(data =>{
        res.send(data);
    }).catch(err =>{
        res.status(500).send({
            message: err.message|| "Something was wrong creating user"
        });
    });
};

// Obtener todos los usuarios
exports.findAll = (req,res) => {

    Usuario.find().then(user=>{
        res.send(user);
    }).catch(err=>{
        res.status(500).send({
            message: err.message || "Error mientras se obtenian usuarios"
        });
    });

};


// Obtener un usuario por Id
exports.findOne = (req,res) => {
Usuario.findById(req.params.usuarioId)
.then(usuario=>{
    if (!usuario){
        return res.status(404).send({
            message: "user NOT FOUND con ID " +req.params.usuarioId
        });
        }
        res.send(usuario);
    }).catch(err=>{
        if(err.kind === 'ObjectId'){
            return res.status(404).send({
                message: "usuario no encontrado con ese id :" +req.params.usuarioId
            });
        }
         return res.status(500).send({
            message: "Tenemos problemas con ese id :" +req.params.usuarioId
         });
    });
};




// Actualizar un usuario
exports.update = (req, res) => {
// Validate Request
if(!req.body) {
    return res.status(400).send({
        message: "usuario vacio"
    });
}

// Find note and update it with the request body
Usuario.findByIdAndUpdate(req.params.usuarioId, {
    nombre_usuario: req.body.nombre_usuario || "sin nombre de usuario",
    contraseña: req.body.contraseña || "sin contraseña",
    nombre: req.body.nombre || "Sin nombre",
    edad: req.body.edad || "No especificado",
    localidad: req.body.localidad || "No especificado",
    correo: req.body.correo || "Sin correo",
}, {new: true})
.then(Usuario => {
    if(!usuario) {
        return res.status(404).send({
            message: "Usuario not found with id " + req.params.usuarioId
        });
    }
    res.send(usuario);
}).catch(err => {
    if(err.kind === 'ObjectId') {
        return res.status(404).send({
            message: "Usuario not found with id " + req.params.usuarioId
        });                
    }
    return res.status(500).send({
        message: "Error updating user with id" + req.params.usuarioId
    });
});
};

// Borrar una Usuario 

exports.delete = (req,res)=>{

    let usuarioId = req.params.usuarioId;
     
    Usuario.findById(usuarioId,(err,Usuario)=>{
        if(err) res.status(500).send({message: `ERROR AL BORRAR EL USER: ${err}`})
    
    Usuario.remove(err =>{
        if(err)res.status(500).send({message: `ERROR AL BORRAR EL USER: ${err}`})
        res.status(200).send({message: `EL USER A SIDO ELIMINADO:`})

    })    
    })
};
