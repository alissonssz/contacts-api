const mysql = require('mysql2/promise');

const connectDB = async() => {
    const config = {
        host     : process.env.DB_HOST,
        user     : process.env.DB_USER,
        password : process.env.DB_USER_PASSWORD,
        database : process.env.DB_NAME,
        port     : process.env.DB_PORT,
    }
        
    const connection = await mysql.createConnection(config);
    global.db = connection;
}

module.exports = connectDB;
    



 