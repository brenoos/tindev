const routes = require('express').Router();

routes.get('/', (req, res) => res.json({ message: 'Hello world' }));

module.exports = routes;
