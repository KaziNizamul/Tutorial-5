const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.put('/update/:id', userController.updateUser);
router.post('/add', userController.addUser);
router.get('/users', userController.getAllUsers);
router.get('/user/:id', userController.getUserById);

module.exports = router;
