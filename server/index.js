const express = require('express');
const app = express();
var db = require('./db').pool;

// Middleware
var morgan = require('morgan');
var cors = require('cors');

// Logging and parsing
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.listen(3001);
console.log('Listening on port 3000');