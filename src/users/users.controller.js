const usersController = {}
const usersService = require('./users.service');

usersController.getUsers = async (req, res, next) => { 
    const result = await usersService.getUsers();
    return res.json({ result });
}

usersController.getUserById = async (req, res, next) => { 
    return await usersService.getUserById();
}

usersController.createUser = async (req, res, next) => { 
    return await usersService.createUser();
}

usersController.updateUser = async (req, res, next) => { 
    return await usersService.updateUser();
}

usersController.deleteUser = async (req, res, next) => { 
    return await usersService.deleteUser();
}

module.exports = usersController;