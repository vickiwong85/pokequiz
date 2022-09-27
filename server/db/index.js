const { Pool, Client } = require('pg')
const path = require('path');
// require('dotenv').config({ path: '../.env' });
// require('dotenv').config({path: path.resolve(__dirname, '../.env')});

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "password",
  database: "pokemon",
})

module.exports.pool = pool;