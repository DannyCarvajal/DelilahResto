
import connection from '../database.js';

import Sequelize from "sequelize"; // Import the built-in data types
const {DataTypes} = Sequelize

export const orderModel= connection.define('order',{

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    total:{
        type:DataTypes.INTEGER
    },
    payMethod:{
        type:DataTypes.INTEGER
    },
    userId:{
        type: DataTypes.INTEGER
    },
    stateId:{
        type: DataTypes.INTEGER
    }
},{
    timestamps: false
})

