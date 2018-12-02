module.exports =(app)=> {
    const ficha = require('../controllers/Ficha.controller.js');

    //Create a new ficha :  
    app.post('/Ficha',ficha.create);

    //Retrieve all users
    app.get('/Ficha',ficha.findAll);

    //Retrieve a single ficha with fichaId
    app.get('/Ficha/:fichaId',ficha.findOne);
    
    //Update a user with with userId
    app.put('/Ficha/:fichaId',ficha.update);

    // Delete a ficha with fichaId
    app.delete('/Ficha/:fichaId', ficha.delete);
}