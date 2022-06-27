const router = require('express').Router();

// import controllers
const userController = require('../controller/usersController');

router.post('/api/register', userController.register);





module.exports = router;