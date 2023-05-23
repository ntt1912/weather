// get the client
import mysql from 'mysql2/promise';

// create the connection to database

console.log("Creating connection pool...");

const pool = mysql.createPool({
    host: 'localhost',
    user: 'thanhcode',
    database: 'weatherdb',
    password: 'Thanhdongtho1912',
});


export default pool;