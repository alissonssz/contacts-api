const usersService = {};
const usersDate = require('./users.data');

usersService.getUsers = async () => { 
    return usersDate.findAllUsers();
}

usersService.getUserById = async (id) => { 
    const userCriado = await usersDate.findUserById(id);
    return userCriado;
}

usersService.postUser = async (user) => { 
    const userCriado = await usersDate.createUser(user);
    return userCriado;
}

usersService.updateUser = async (id, user) => { 
    const updatedUser = await usersDate.updateUser(id, user);
    return updatedUser;
}

usersService.deleteUser = async (userId) => { 
    const deletedUser = await usersDate.deleteUser(userId);
    return deletedUser;
}

module.exports = usersService;