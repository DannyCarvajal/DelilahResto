
import connection from '../database.js'

import Sequelize from "sequelize" // Import the built-in data types
const {DataTypes} = Sequelize 

export const userModel= connection.define('user',{

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nickname:{
        type:DataTypes.STRING,
        unique:true
    },
    name:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING,
        unique:true
    },
    phonenumber:{
        type:DataTypes.STRING
    },
    adress:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    roleId:{
        type:DataTypes.INTEGER,
        default: 2,
        references:{
            model: 'roles' ,
            key: 'id'
        }
    }
},{
    timestamps: false,
})


