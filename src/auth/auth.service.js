const authService = {};

authService.logInUser = async (req, res, next) => { 
    return 'logInUser';
}

authService.logOutUser = async (req, res, next) => { 
    return 'logOutUser';
}

module.exports = authService;