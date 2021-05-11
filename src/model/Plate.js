

const db= require('../database')

const { DataTypes } = require("sequelize"); // Import the built-in data types

const foodPlate= db.define('foodplate',{

    Plate_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Name:{
        type:DataTypes.STRING
    },
    Price:{
        type:DataTypes.INTEGER
    },
    Description:{
        type: DataTypes.TEXT
    },
    Img:{
        type:DataTypes.INTEGER,
    }
},{
    timestamps: false
})


module.exports=foodPlate