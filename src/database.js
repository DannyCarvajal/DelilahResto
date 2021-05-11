
/* CONNECTING TO THE DATABASE */
const Sequelize= require('sequelize')

/* ENVIROMENT VARIABLES */
require('dotenv').config()

/* SET CONNECTION */
module.exports= new Sequelize(process.env.DB_CONNECTION)
