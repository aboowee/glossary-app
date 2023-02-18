const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      `CREATE TABLE IF NOT EXISTS responses
      (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, sessionID VARCHAR(255) NULL UNIQUE, name VARCHAR(255) NULL,
      email VARCHAR(255) NULL, password VARCHAR(255) NULL, address1 VARCHAR(255) NULL, address2 VARCHAR(255) NULL,
      city VARCHAR(255) NULL, state VARCHAR(255) NULL, shipZip INT NULL, creditCard INT NULL, phoneNumber VARCHAR(255) NULL,
      expiration VARCHAR(255) NULL, cvc INT NULL, billZip INT NULL, submitted BOOLEAN DEFAULT false)`
    )
  )
  .catch((err) => console.log(err));

module.exports = db;
