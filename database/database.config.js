const mysql = require('mysql');

const config = {
    host     : 'localhost',
    user     : 'me',
    password : 'secret',
    database : 'my_db'
  }
const connection = mysql.createConnection(config);

const connect = () => {
    
    return connection.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Connection established!')
})}


const disconnect = () => {
 return con.end((err) => {
    if(err) {
        console.log('Erro to finish connection...', err)
        return 
    }
    console.log('The connection was finish...')
})
}

module.exports = connect;
module.exports = disconnect;
 