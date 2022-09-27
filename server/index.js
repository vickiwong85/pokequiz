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

// Router
var router = require('./routes.js');

// serve the client files
app.use(express.static('./public'));

// Set up our routes
app.use('/pokemon', router);
// app.get('/pokemon/pokeball', function (req, res) {
//   console.log('here')
// })

app.listen(3000);
console.log('Listening on port 3000');