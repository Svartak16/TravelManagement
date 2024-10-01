const mysql = require('mysql');
const dotenv = require('dotenv')

dotenv.config({
    path: "./.env",
});


const db = mysql.createConnection({
    host: process.env.DB_HOST,          // Using environment variable for host
    database: process.env.DB_COLLECTION, // Using environment variable for database name
    user: process.env.DB_USERNAME,      // Using environment variable for username
    password: process.env.DB_PASSWORD,  // Using environment variable for password
    port: process.env.DB_PORT 
});

db.connect(err=>{
    if(err)
    {
        console.log('Error occured' +err);
    }
    else 
    {
        console.log('Connected Successful');
    }
});
module.exports.db = db;