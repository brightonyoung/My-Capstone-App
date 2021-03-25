const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

//controllers/mushrooms.js

const createMushroom = (req, res) => {

  let sql = "INSERT INTO mushrooms (genus, species, nickname, habitat, sporeColor, userID) VALUES (?, ?, ?, ?, ?, ?);"

  sql = mysql.format(sql, [req.body.genus, req.body.species, req.body.nickname, req.body.habitat, req.body.sporeColor, req.body.userID])
  
  console.log("hit create mushroom", sql)

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ message: "New Mushroom Posted!", newId: results.insertId });
  })
}

const listMushrooms = (req, res) => {
  pool.query('SELECT * FROM mushrooms', (err, rows) => {
    if (err) {
      console.log({ 'message': 'Error occurred: ' + err })
      return handleSQLError(res, err)
    }
    res.json(rows)
  });
}

const getMushroom = (req, res) => {}

const updateMushroom = (req, res) => {}

const deleteMushroom = (req, res) => {}

module.exports = { 
  createMushroom, 
  listMushrooms, 
  getMushroom, 
  updateMushroom, 
  deleteMushroom 
}
