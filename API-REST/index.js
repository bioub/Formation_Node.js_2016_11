'use strict';

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const routeContacts = require('./route/contacts');

mongoose.connect('mongodb://localhost/addressbook');
mongoose.Promise = global.Promise;

const server = express();
server.use(morgan('dev'));
server.use('/api/contacts', routeContacts);

server.use((req, res, next) => {
  res.statusCode = 404;
  res.json({
    message: req.message || '404 Not Found'
  });
});

server.use((err, req, res, next) => {
  res.statusCode = 500;
  res.json({
    message: err.message
  });
});

server.listen(8080, () => {
  console.log('Server started http://localhost:8080');
});
