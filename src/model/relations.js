

// /* RELATIONS */
import {roleModel} from './Role.js'
import {userModel} from './User.js'
import {stateModel} from './State.js'
import {orderModel} from './Order.js'
import {plateModel} from './Plate.js'
import {orderplateModel} from './Order_Plate.js'

// /* USER HAS A ROLE, A ROLE CAN BE PART OF MANY USERS */
roleModel.hasMany(userModel)
userModel.belongsTo(roleModel)
// /* ORDER HAS A STATE, A STATE BELONGS TO MANY ORDERS */
stateModel.hasMany(orderModel)
orderModel.belongsTo(stateModel)
// /* USER HAS MANY ORDER, AN ORDER BELONGS TO AN USER */
userModel.hasMany(orderModel)
orderModel.belongsTo(userModel)
// /* AN ORDER CAN HAVE MANY PLATES AND THE OTHER WAY AROUND */
plateModel.belongsToMany(orderModel, {through: orderplateModel})
orderModel.belongsToMany(plateModel, {through: orderplateModel})


export {roleModel,userModel,stateModel,orderModel,plateModel,orderplateModel} 

