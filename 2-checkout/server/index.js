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
  //New user, assign req.body to session_id in DB
  //Search in database if user exists
  //if does, redirect to signup
  //if not,
  console.log(req.body);
  console.log(req.session_id)
  res.redirect('/shipping');
})

app.post('/checkout', (req, res) => {
  db.query(`SELECT submitted FROM responses WHERE sessionID = '${req.session_id}'`, (err, result) => {
    if (!result.length || !result[0].submitted) {
      console.log(result);
      res.redirect('/signup');
    } else {
      res.sendStatus(500);
    }
  })

})




app.post('/shipping', (req, res) => {
  console.log(req.body);
  res.redirect('/payment');
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
