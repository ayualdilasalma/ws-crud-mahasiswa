/**
 * Created by dilacim on 5/5/2017.
 */
var mysql = require('mysql');
var connection = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'pbd'
});

module.exports = connection;