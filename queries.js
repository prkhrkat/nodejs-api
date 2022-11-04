const Pool = require('pg').Pool
const pool = new Pool({
  user: 'test_user',
  host: 'localhost',
  database: 'node-learn',
  password: 'password',
  port: 5432,
})