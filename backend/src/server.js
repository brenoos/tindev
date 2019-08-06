const express = require('express');

const server = express();

server.get('/', (req, res) => res.json({ message: 'Hello world' }));

server.listen(3333);
