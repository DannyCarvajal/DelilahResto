
/* CONNECTING TO THE DATABASE */
import Sequelize from 'sequelize'

/* ENVIROMENT VARIABLES */
import dotenv from 'dotenv'
dotenv.config()

/* SET CONNECTION */
const connection = new Sequelize(process.env.DB_CONNECTION)
export default connection


// import * as dbmodels from './model/Relations.js'
import {userModel} from './model/User.js'
import {roleModel} from './model/Role.js'

/* --------- BS SYNC AND INITIAL DATA--------------- */
connection.sync({force:true})
    .then( () =>  defaultDbValues()  )
    .catch((err)=> console.log(err))


const defaultDbValues= async () => {

    const defaultRoles = ['Admin','User']

    // defaultRoles.forEach(element => {
    //     console.log(element);
    //     dbmodels.roleModel.create({ name: element })
    // })

    const defaultUser= [
        ['hellenflash', 'Hellen Nicolle', 'mycycle@hotmail.com','15648948','Bogota las Américas piso2 apt 301', 'melo123',2],
        ['tsweetheart','daniel carvajal', 'daniel@hotmail.com','5464564','Bucaramanga Santander Holliday inn apt 503', 'sara12', 1]
    ]
    
    // /* INITIAL VALUES */
    defaultUser.forEach(element => {

        userModel.create({
            nickname: element[0] , name: element[1] ,email: element[2],
            phonenumber: element[3] , adress: element[4] , password: element[5]/* , roleId: element[6] */
        })
        
    })


    // const defaultFoodPlates = [
    //     ['Lasagna Méxicana en salsa de pollo', 25, 'Deliciosa Lasagna mixta méxicana con toque de picante y verduras', 'https://source.unsplash.com/500x500/?lasagna'],
    //     ['Hamburguesa de la casa', 10, 'Hamburguesa triple carne con doble queso y verduras acompañada de cascos fritos', 'https://source.unsplash.com/500x500/?hamburguesa'],
    //     ['Arroz chino', 20,' Bowl de arroz chino con pollo, carne, cerdo, verduras, maiz, y raices chinas', 'https://source.unsplash.com/500x500/?arrozchino'],
    //     ['Calamar al vapor con caldo de sirena', 45, 'El don de cada sirena es encantar a los demás', 'https://source.unsplash.com/500x500/?calamar'],
    //     ['Huevo frito con sal', 8, 'Delicioso huevo semicocido con especias', 'https://source.unsplash.com/500x500/?huevo'],
    //     ['Croquetas de pollo con mordiscos de pejelagarto', 30, ' te aseguramos una experiencia inolvidable', 'https://source.unsplash.com/500x500/?croquetas']
    // ]

    //     /* INITIAL VALUES */
    //     defaultFoodPlates.forEach(element => {

    //         plateModel.create({
    //             name: element[0] , price: element[1] ,description: element[2], img: element[3]
    //         })

    //     })
}



