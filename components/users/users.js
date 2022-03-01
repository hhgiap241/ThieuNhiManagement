const express = require('express');
const router = express.Router();

const userController = require('./userController');

router.get('/account', userController.getAccountPage);

module.exports = router;
