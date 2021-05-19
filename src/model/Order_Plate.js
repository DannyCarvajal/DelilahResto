
import connection from '../database.js'

import Sequelize from "sequelize" // Import the built-in data types
const {DataTypes} = Sequelize 

export const orderplateModel= connection.define('orderplate',{

    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    orderId:{
        type:DataTypes.INTEGER
    },
    plateId:{
        type:DataTypes.INTEGER
    },
    quantity:{
        type:DataTypes.INTEGER
    }
},{
    timestamps:false
}
)