const express = require('express');
const router = express.Router();

const userController = require('./userController');

router.get('/account', userController.getAccountPage);
router.get('/list', userController.getListPage);
module.exports = router;
