'use strict';
require('dotenv').config();
const server = require('./src/server');
const port = process.env.PORT || 3030;
server.start(port);