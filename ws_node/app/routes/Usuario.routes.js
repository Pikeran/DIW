module.exports =(app)=> {
    const user = require('../controllers/Usuario.controller.js');

    //Create a new user :  
    app.post('/Usuario',user.create);

    //Retrieve all users
    app.get('/Usuario',user.findAll);

    //Retrieve a single user with userId
    app.get('/Usuario/:usuarioId',user.findOne);
    
    //Retrieve a single user with nombre
    app.get('/Usuario/:nombre_usuario',user.findTwo);
    
    //Update a user with with userId
    app.put('/Usuario/:usuarioId',user.update);
    
    //Update a user with with userId
    app.put('/Usuario/:nombre_usuario',user.update);

    // Delete a user with userId
    app.delete('/Usuario/:usuarioId', user.delete);
}
