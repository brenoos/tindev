/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect(
  'mongodb+srv://user:s7a4u1mfEbVQePLb@cluster0-z7yke.mongodb.net/tindev?retryWrites=true&w=majority',
  { useNewUrlParser: true }
);

const server = express();

server.use(express.json());
server.use(routes);

server.listen(3333, () => {
  console.log('Server Running');
});
