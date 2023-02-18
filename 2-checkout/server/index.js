require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.use(express.json());

app.post('/signup', (req, res) => {
  db.query(`SELECT email FROM responses WHERE email = '${req.body.email}'`, (err, result) => {
    if (!result.length) {
      db.query(`INSERT INTO responses (name, password, email, sessionID) VALUES ('${req.body.name}', '${req.body.password}', '${req.body.email}', '${req.session_id}')`)
      res.redirect('/shipping');
    } else {
      res.sendStatus(500);
    }
  })
})

app.post('/checkout', (req, res) => {
  db.query(`SELECT submitted FROM responses WHERE sessionID = '${req.session_id}'`, (err, result) => {
    if (!result.length || !result[0].submitted) {
      res.redirect('/signup');
    } else {
      res.sendStatus(500);
    }
  })
})

app.post('/shipping', (req, res) => {
  db.query(`SELECT address1, submitted FROM responses WHERE sessionID = '${req.session_id}'`, (err, result) => {
    if (!result[0].address1) {
      db.query(`UPDATE responses SET address1='${req.body.address1}', address2='${req.body.address2}', city='${req.body.city}',
      state='${req.body.state}', shipZip='${req.body.shipZip}', phoneNumber='${req.body.phoneNumber}' WHERE sessionID='${req.session_id}'`)
      res.redirect('/payment');
    } else {
      res.sendStatus(500);
    }
  })
})

app.post('/payment', (req, res) => {
  console.log(req.body);
  res.redirect('/summary');
})

app.post('/summary', (req, res) => {
  res.redirect('/');
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

 app.listen(process.env.PORT);
 console.log(`Listening at http://localhost:${process.env.PORT}`);
