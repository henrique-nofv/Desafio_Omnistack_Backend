const express = require('express');
const routes = express.Router();
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

/** Rotas de criação */
routes.post('/users',SessionController.store);

routes.post('/spots',SpotController.store);

module.exports = routes;