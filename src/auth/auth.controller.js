const authController = {}
const authService = require('./auth.service');

authController.logInUser = async (req, res, next) => { 
    return await authService.logInUser();
}

authController.logOutUser = async (req, res, next) => { 
    return await authService.logOutUser();
}

module.exports = authController;