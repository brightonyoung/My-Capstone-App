const express = require('express')
const router = express.Router()

const mushroomController = require('../controllers/mushrooms.js')
// Create, Read, Update, Delete 311-2

router.post('/mushrooms', mushroomController.createMushroom)
router.get('/mushrooms', mushroomController.listMushrooms)
// get one user
// put(update) user
// post(delete) user

module.exports = router
