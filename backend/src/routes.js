const routes = require('express').Router();

const DevController = require('./controllers/DevController');

routes.post('/devs', DevController.store);

module.exports = routes;
