'use strict';

const express = require('express');
const { Pool } = require('./db/pool.js');
const {
  getUser,
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
  deleteAllUsers
} = require('./controller/controllers.js');

const app = express();
const jsonParse = express.json();

app.get('/user/:id', getUser);
app.get('/users/', getAllUsers);
app.post('/user/', jsonParse, createUser);
app.put('/user/:id', jsonParse, updateUser);
app.delete('/user/:id', deleteUser);
app.delete('/users/', deleteAllUsers);

app.listen(3000);
