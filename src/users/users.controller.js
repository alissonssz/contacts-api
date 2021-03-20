const usersController = {}
const usersService = require('./users.service');

usersController.getUsers = async (req, res, next) => { 
    const users = await usersService.getUsers();
    return res.json(users);
}

usersController.getUserById = async (req, res, next) => { 
    const userId = req.params.id; 
    const foundUser = await usersService.getUserById(userId);
    return res.json(foundUser);
}

usersController.postUser = async (req, res, next) => { 
    const user = req.body;
    const savedUser =  await usersService.postUser(user);
    return res.json(savedUser);
}

usersController.updateUser = async (req, res, next) => { 
    const userId = req.params.id; 
    const user = req.body;
    const updatedUser = await usersService.updateUser(userId, user);
    return res.json(updatedUser); 
}

usersController.deleteUser = async (req, res, next) => { 
    const userId = req.params.id; 
    const deletedUser = await usersService.deleteUser(userId);
    return res.json(deletedUser); 
}

module.exports = usersController;