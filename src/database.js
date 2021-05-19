
/* CONNECTING TO THE DATABASE */
import Sequelize from 'sequelize'

/* ENVIROMENT VARIABLES */
import dotenv from 'dotenv'
dotenv.config()

/* SET CONNECTION */
const connection = new Sequelize(process.env.DB_CONNECTION)
export default connection

/* ------------CREATE TABLES---------------- */
connection.sync({force:true})
.then(()=> console.log('everything correct '))
.catch((err)=> console.log(err))

/* RELATIONS */
import {roleModel} from './model/Role.js'
import {userModel} from './model/User.js'
import {stateModel} from './model/State.js'
import {orderModel} from './model/Order.js'
import {plateModel} from './model/Plate.js'
import {orderplateModel} from './model/Order_Plate.js'

/* USER HAS A ROLE, A ROLE CAN BE PART OF MANY USERS */
roleModel.hasMany(userModel)
userModel.belongsTo(roleModel)
/* ORDER HAS A STATE, A STATE BELONGS TO MANY ORDERS */
stateModel.hasMany(orderModel)
orderModel.belongsTo(stateModel)
/* USER HAS MANY ORDER, AN ORDER BELONGS TO AN USER */
userModel.hasMany(orderModel)
orderModel.belongsTo(userModel)
/* AN ORDER CAN HAVE MANY PLATES AND THE OTHER WAY AROUND */
plateModel.belongsToMany(orderModel, {through: orderplateModel})
orderModel.belongsToMany(plateModel, {through: orderplateModel})






