const express = require('express')
const router = express.Router()

const usersController = require('../controllers/users.js')
// Create, Read, Update, Delete 311-2 CRUD

router.post('/users', usersController.createUser)
router.get('/users', usersController.listUsers)
// get one user
// put(update) user
// post(delete) user

module.exports = router


// 311-4 Routes and Controllers