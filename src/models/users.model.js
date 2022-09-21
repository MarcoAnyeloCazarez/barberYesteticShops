const { DataTypes } = require('sequelize')
const { db } = require('../utils/database')

const Users = db.define('users', {
    id : {
        primaryKey: true,
        type: DataTypes.UUID,
        allow: null
    },

    first_name: {
        allowNull: false,
        type: DataTypes.STRING,
    },

    last_name: {
        allowNull: false,
        type: DataTypes.STRING
    },

    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        validate: {
            isEmail: true
        }
    },

    password: {
        allowNull: false,
        type: DataTypes.STRING
    },

    phone: {
        allowNull: false,
        type: DataTypes.STRING
    },

    gender: {
        allowNull: false,
        type: DataTypes.STRING
    },

    address: {
        type: DataTypes.STRING
    },

    dni: {
        type: DataTypes.STRING
    },

    birthday_date: {
        allowNull: false,
        type: DataTypes.DATE
    }, 

    profile_image: {
        type: DataTypes.STRING
    },

    role_id: {
        allowNull: false,
        type: DataTypes.UUID
    },

    created_at: {
        allowNull: false,
        type: DataTypes.DATE
    },

    updated_at: {
        allowNull: false,
        type: DataTypes.DATE
    }
})

module.exports = {
    Users
}