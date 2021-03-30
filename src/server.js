'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const notFoundRequest = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const app = express();
const logger = require('./middleware/logger');
const clothesRouter = require('./routes/clothes.js');
const foodRouter = require('./routes/food.js');

app.use(logger); //Global Middleware

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

  app.get('/error', (req, res) => {
    throw new Error('ERROR FROM server side :) ...');
  });

app.use('/clothes/', clothesRouter);
app.use('/food/', foodRouter);

app.use('*', notFoundRequest);
app.use(errorHandler);

function start(port) {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  }

module.exports = {
    app: app,
    start: start,
  };