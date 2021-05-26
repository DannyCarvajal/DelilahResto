
/* CONNECTING TO THE DATABASE */
import {Sequelize} from 'sequelize'

/* ENVIROMENT VARIABLES */
import dotenv from 'dotenv'
dotenv.config()

/* SET CONNECTION */
const connection = new Sequelize(`mysql://${process.env.DB_CONNECTION_USER}:${process.env.DB_CONNECTION_PASSWORD}@${process.env.DB_CONNECTION_PORT}/${process.env.DB_CONNECTION_DATABASENAME}`)
/* FIX THIS XD  */
export default connection




