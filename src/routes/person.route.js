const express = require('express')
const router = express.Router()
const personController =   require('../controllers/person.controller');
// Retrieve all employees
router.get('/', personController.findAll);
// Create a new employee
router.post('/', personController.create);
// Retrieve a single employee with id
router.get('/:id', personController.findById);
// // Update a employee with id
router.put('/:id', personController.update);
// Delete a employee with id
router.delete('/:id', personController.delete);
module.exports = router