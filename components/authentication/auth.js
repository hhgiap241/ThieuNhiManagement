const express = require('express');
const router = express.Router();
const authController=require('./authController')

router.get('/login',authController.getLoginPage)
router.get('/reset-password', authController.getResetPasswordPage);
router.get('/signup', authController.getSignupPage);
module.exports = router;
