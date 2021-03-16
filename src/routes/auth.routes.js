const express = require('express');
const router = express.Router();
const authController = require('../auth/auth.controller');

router.post(
    '/login',
    authController.logInUser
);

router.post(
    '/logout',
    authController.logOutUser
);

module.exports = router;