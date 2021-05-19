
import connection from '../database.js';

import Sequelize from "sequelize"; // Import the built-in data types
const {DataTypes} = Sequelize

export const stateModel= connection.define('state',{

    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING
    }
},{
    timestamps:false
})  

