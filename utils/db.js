// app.js or index.js
require('dotenv').config();

const { createPool } = require('mysql2/promise');

const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  namedPlaceholders: true,
});

module.exports = {
  pool,
};
