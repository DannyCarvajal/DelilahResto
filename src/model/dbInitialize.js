
/* DATATYPES FOR MODELS */
import { Sequelize } from 'sequelize'
const { DataTypes } = Sequelize

/* DATABASE CONNECTION */
import connection from '../database.js'

//* RELATIONS *//
import { roleModel } from './Role.js'
import { userModel } from './User.js'
import { stateModel } from './State.js'
import { orderModel } from './Order.js'
import { plateModel } from './Plate.js'
import { orderplateModel } from './orderPlate.js'

const role = roleModel(connection, DataTypes)
const user = userModel(connection, DataTypes)
const state = stateModel(connection, DataTypes)
const plate = plateModel(connection, DataTypes)
const order = orderModel(connection, DataTypes)
const orderplate = orderplateModel(connection, DataTypes)

/* --------- DB SYNC AND INITIAL DATA--------------- */
export default connection.sync()

export { role, user, state, plate, order, orderplate }




