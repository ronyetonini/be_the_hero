const express = require('express');
const ongControler = require('../src/controllers/ongController')
const incidentControler = require('../src/controllers/incidentController')
const sessionControler = require('../src/controllers/sessionController')
const routes = express.Router();

routes.post('/sessions', sessionControler.create);

routes.get('/ongs', ongControler.index);
routes.post('/ongs', ongControler.create);

routes.get('/incidents', incidentControler.index);
routes.post('/incidents', incidentControler.create);
routes.delete('/incidents/:id', incidentControler.delete);
routes.get('/incidentsFromOng', incidentControler.incidentsFromOng);

module.exports = routes;