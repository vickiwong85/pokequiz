const { Pool, Client } = require('pg')
const path = require('path');
// require('dotenv').config({ path: '../.env' });
require('dotenv').config({path: path.resolve(__dirname, '.env')});

// const pool = new Pool({
//   host: "localhost",
//   user: "postgres",
//   port: 5432,
//   password: "password",
//   database: "pokemon",
// })
console.log('hello');
console.log(process.env.HOST);
const pool = new Pool({
  host: process.env.HOST,
  user: process.env.USERNAME,
  port: process.env.DBPOT,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
})

module.exports.pool = pool;