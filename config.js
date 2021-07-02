// we'll have configurations here like the database credentials
// , rows per page etc

const dotevn = require('dotenv');
dotevn.config();
const env = process.env;
// const mysql = require('mysql');

// Linking node.js with mysql
const config = {
    db: {
        host: env.DB_HOST,
        user: env.DB_USER,
        password: env.DB_PASS,
        database: env.DB_NAME,
    },
    listPerPage: process.env.LIST_PER_PAGE,
};

module.exports = config