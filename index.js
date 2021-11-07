//imports
const express = require('express');
const app = express();

//calling the initial startup modules
require('./startup/db')();
require('./startup/port')(app);
require('./startup/routing')(app);