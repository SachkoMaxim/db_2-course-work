'use strict';

const { Pool } = require('../db/pool.js');

const getMaxUserId = () => {
  const sql = 'SELECT MAX(id) FROM opinio.User';
  return new Promise((resolve, reject) => {
    Pool.query(sql, (error, result, fields) => {
      return resolve(result);
    });
  });
};

const getUser = (req, res) => {
  const sql = `SELECT * FROM opinio.User WHERE id = ${req.params.id}`;
  Pool.query(sql, (error, result, fields) => {
    if (error) return res.status(500).json(error);
    result ? res.send(result) : res.sendStatus(404);
  });
};

const getAllUsers = (req, res) => {
  const sql = 'SELECT * FROM opinio.User';
  Pool.query(sql, (error, result, fields) => {
    if (error) return res.status(500).json(error);
    result ? res.send(result) : res.sendStatus(404);
  });
};

const createUser = (req, res) => {
  if (!req.body) return res.sendStatus(400);
  getMaxUserId().then((data) => {
    let maxId = data[0]['MAX(id)'];
    const sql = `INSERT INTO opinio.User (id, mail, password, name, age, gender) VALUES (${++maxId},"${req.body.mail}", "${req.body.password}", "${req.body.name}", ${req.body.age}, "${req.body.gender}")`;
    Pool.query(sql, (error, result, fields) => {
      if (error) return res.status(500).json(error);
      result ? res.send(result) : res.sendStatus(404);
    });
  });
};

const deleteUser = (req, res) => {
  const sql = `DELETE FROM opinio.User WHERE id = ${req.params.id}`;
  Pool.query(sql, (error, result, fields) => {
    if (error) return res.status(500).json(error);
    result ? res.send(result) : res.sendStatus(404);
  });
};

const updateUser = (req, res) => {
    if (!req.body) return res.sendStatus(400);
  
    const updateFields = Object.keys(req.body);
    const updateValues = updateFields.map(field => `${field} = "${req.body[field]}"`).join(", ");
  
    const sql = `UPDATE opinio.User SET ${updateValues} WHERE id = ${req.params.id}`;
    
    Pool.query(sql, (err, result, fields) => {
      if (err) return res.status(500).json(err);
      result ? res.send(result) : res.sendStatus(404);
    });
  };

  const deleteAllUsers = (req, res) => {
    const sql = 'DELETE FROM opinio.User';
    Pool.query(sql, (error, result, fields) => {
      if (error) return res.status(500).json(error);
      result ? res.send(result) : res.sendStatus(404);
    });
  };

module.exports = { getUser, getAllUsers, createUser, deleteUser, updateUser, deleteAllUsers };
