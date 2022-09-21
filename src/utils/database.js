const { Sequelize } = require('sequelize')
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})

const db = new Sequelize({
    dialect: 'postgres',
    port: 5432,
    host: 'localhost',
    username: 'postgres',
    password: '1602',
    database: 'barbershops'
})

module.exports = {
    db
}