const express = require('express');
const router = express.Router();
const {protect, authorize} = require('../middleware/authorize')
const userController = require('../controller/userController')

router.post('/createU', userController.createUser);
router.get('/viewU',protect,authorize('Organizer'), userController.viewAllUser);
router.put('/updateU/:id', userController.updateUserById);

module.exports = router ;
