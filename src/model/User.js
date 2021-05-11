
const db= require('../database')

const { DataTypes } = require("sequelize"); // Import the built-in data types

const User= db.define('user',{

    User_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nickname:{
        type:DataTypes.STRING,
        unique:true
    },
    Name:{
        type:DataTypes.STRING
    },
    Email:{
        type:DataTypes.STRING,
        unique:true
    },
    Password:{
        type: DataTypes.STRING
    },
    Roleid:{
        type:DataTypes.INTEGER,
        default: 2
    }
},{
    timestamps: false
})


module.exports=User