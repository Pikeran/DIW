module.exports =(app)=> {
    const analista = require('../controllers/incidencia.controller.js');

    //Create a new Incidencia 
    app.post('/analista',analista.create);

    //Retrieve all Incidencias
    app.get('/analista',analista.findAll);

    //Retrieve a single Incidencia with incidenciaId
    app.get('/analista/:incidenciaId',
    analista.findOne);

    //Update a Incidencia with with incidenciaId
    app.put('/analista/:incidenciaId', analista.update);

    // Delete a investigadores with incidenciaId
    app.delete('/analista/:incidenciaId', analista.delete);


}