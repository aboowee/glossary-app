require("dotenv").config();
const express = require('express');
const path = require('path');
const {insertWord: insertWord} = require('./db');

const App = express();

App.use(express.static(path.join(__dirname, '../client/dist')));
App.use(express.json());

App.post('/words', (req, res) => {
  console.log(req.body)
  // insertWord(req.body);
  res.sendStatus(200);
})





App.listen(3000, ()=> {
  console.log('listening to port 3000');
})