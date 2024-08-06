const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const Sequelize = require('sequelize');

const connection = process.env.DB_URL
    ? new Sequelize(process.env.DB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'postgres',
        dialectOptions: {
            decimalNumbers: true,
        },
        logging: false,
    });

module.exports = connection;