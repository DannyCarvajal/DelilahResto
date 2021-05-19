
import connection from '../database.js'

import Sequelize from "sequelize" // Import the built-in data types
const {DataTypes} = Sequelize 

export const plateModel= connection.define('foodplate',{

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type:DataTypes.STRING
    },
    price:{
        type:DataTypes.INTEGER
    },
    description:{
        type: DataTypes.TEXT
    },
    img:{
        type:DataTypes.INTEGER,
    }
},{
    timestamps: false
})
