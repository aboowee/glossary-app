require("dotenv").config();
const express = require('express');
const path = require('path');
const {insertWord: insertWord} = require('./db');
const {searchWord: searchWord} = require('./db');
const {deleteWord: deleteWord} = require('./db');

const App = express();

App.use(express.static(path.join(__dirname, '../client/dist')));
App.use(express.json());

App.post('/words', (req, res) => {
  insertWord(req.body)
  .then((data) => {
    res.sendStatus(200);
  })
  .catch((error) => {
    res.sendStatus(404);
  })
})

App.post('/delete', (req, res) => {
  deleteWord(req.body.word)
  .then((data) => {
    res.sendStatus(200);
  })
  .catch((error) => {
    res.sendStatus(404);
  })
})

App.get('/words', (req, res) => {
  searchWord()
  .then((data) => {
    res.send(data);
  })
  .catch((error) => {
    res.sendStatus(404);
  })
})





App.listen(3000, ()=> {
  console.log('listening to port 3000');
})