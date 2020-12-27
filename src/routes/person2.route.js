const express = require('express')
const router = express.Router()
const personController =   require('../controllers/person.controller');
// Retrieve all employees
router.get('/:cnic', personController.findByCNIC);
// // Update a employee with id
module.exports = router