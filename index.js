'use strict';

//todo here
//connect to mongo db
//start server
require('dotenv').config();
require('./src/server.js').start(process.env.PORT);
console.log('here');