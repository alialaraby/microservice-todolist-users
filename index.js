//imports
const error = require('./middlewares/error');
const express = require('express');
const app = express();

//calling the initial startup modules
require('./startup/db').connect();
require('./startup/port')(app);
require('./startup/routing')(app);
app.use(error);