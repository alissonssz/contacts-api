const usersService = {};

usersService.getUsers = async (req, res, next) => { 
    return 'getUsers';
}

usersService.getUserById = async (req, res, next) => { 
    return 'getUserById';
}

usersService.createUser = async (req, res, next) => { 
    return 'createUser';
}

usersService.updateUser = async (req, res, next) => { 
    return 'updateUser';
}

usersService.deleteUser = async (req, res, next) => { 
    return 'deleteUser';
}

module.exports = usersService;