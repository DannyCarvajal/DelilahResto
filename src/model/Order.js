
const db= require('../database')

const { DataTypes } = require("sequelize"); // Import the built-in data types

const Order= db.define('order',{

    Order_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Total:{
        type:DataTypes.INTEGER
    },
    Paymethod:{
        type:DataTypes.INTEGER
    },
    User_Id:{
        type: DataTypes.TEXT
    }
},{
    timestamps: false
})


module.exports=Order