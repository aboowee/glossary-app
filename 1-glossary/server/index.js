require("dotenv").config();
const express = require('express');
const path = require('path');

const App = express();

App.use(express.static(path.join(__dirname, '../client/dist')));
App.use(express.json());

App.listen(3000, ()=> {
  console.log('listening to port 3000');
})