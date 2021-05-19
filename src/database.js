
/* CONNECTING TO THE DATABASE */
import Sequelize from 'sequelize'

/* ENVIROMENT VARIABLES */
import dotenv from 'dotenv'
dotenv.config()

/* SET CONNECTION */
const connection = new Sequelize(process.env.DB_CONNECTION)
export default connection


/* CREATE TABLES */
connection.sync({force:true})
.then(()=> console.log('everything correct '))
.catch((err)=> console.log(err))




