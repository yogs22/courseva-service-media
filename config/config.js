require('dotenv').config(); // this is important!

module.exports = {
"development": {
    "username": process.env.APP_DB_USERNAME,
    "password": process.env.APP_DB_PASSWORD,
    "database": process.env.APP_DB_DATABASE,
    "host": process.env.APP_DB_HOSTNAME,
    "dialect": "mysql"
},
"test": {
    "username": process.env.APP_DB_USERNAME,
    "password": process.env.APP_DB_PASSWORD,
    "database": process.env.APP_DB_DATABASE,
    "host": process.env.APP_DB_HOSTNAME,
    "dialect": "mysql"
},
"production": {
    "username": process.env.APP_DB_USERNAME,
    "password": process.env.APP_DB_PASSWORD,
    "database": process.env.APP_DB_DATABASE,
    "host": process.env.APP_DB_HOSTNAME,
    "dialect": "mysql"
}
};
