
const usersData = {};

usersData.findAllUsers = async() => {
    const isActive = true;
    const sql = 'SELECT * FROM users WHERE isActive = ?';
    const [users, fields] = await db.query(sql, [isActive]).catch((error) => { throw error});
    return users;
}

usersData.findUserById = async(id) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    const [users, fields] = await db.query(sql, [id]).catch((error) => { throw error});
    console.log('users', users);
    const [user] = users;
    return user;
}

usersData.createUser = async(user) => {
    const {name, bithday, genre} = user;
    const sql = 'INSERT INTO users (name, bithday, genre) VALUES (?,?,?)';
    const values = [name, bithday, genre];
    const [savedUser, fields] = await db.query(sql, values).catch((error) => { throw error})
    return savedUser;
}

usersData.updateUser = async(id, user) => {
    const {name, bithday, genre} = user;
    const sql = 'UPDATE users SET name=?, bithday=?, genre=? WHERE id = ?';
    const values = [name, bithday, genre, id];
    const [savedUser, fields] = await db.query(sql, values).catch((error) => { throw error})
    return savedUser;
}

usersData.deleteUser = async(id) => {
    const isActive = false;
    const sql = 'UPDATE users SET isActive=? WHERE id = ?';
    const values = [isActive, id];
    const [savedUser, fields] = await db.query(sql, values).catch((error) => { throw error})
    return savedUser;
}

module.exports = usersData;
