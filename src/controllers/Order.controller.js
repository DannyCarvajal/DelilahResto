
/* MODEL */
import connection from '../database.js'
import {Sequelize} from 'sequelize'
const {QueryTypes} = Sequelize

import { order, orderplate, plate } from '../model/dbInitialize.js'


export const getOrders = async (req, res) => {





}

export const getOrderById = async (req, res) => {





}

export const createOrder = async (req, res) => {

    const { payMethod, plates } = req.body
    const userData = req.userData
    let total = 0

    try {
        /* GET THE LAST ID  */
        const [lastIdQuery] = await connection.query('SELECT max(id) FROM orders ',{type: QueryTypes.SELECT})
        const lastId = Object.values(lastIdQuery)[0]

        /* GET PLATE VALUES AND TOTAL*/
        for await (const element of plates) {

            const foundPlate = await plate.findOne({
                where: {
                    id: element.id
                }
            })

            if (!foundPlate)
                return res.status(404).json({ "message": `Plate ${element.id} not found` })

            const platePrice = foundPlate.dataValues.price
            const finalPriceByPlate = platePrice * element.quantity

            console.log(platePrice, '* ', element.quantity, ' =', finalPriceByPlate)

            total += finalPriceByPlate
        }

        await order.create({
            total, payMethod, userId: userData.id
        })

        /*  CREATE ORDERPLATE MODEL  */
        for await (const element of plates) {

            await orderplate.create({
                orderId:  lastId + 1,
                plateId: element.id,
                quantity: element.quantity
            })
            
        }


        console.log('the new total is ', total)
        res.status(200).json({ message: `Total is ${total} and the order was created, thanks ${userData.nickname} for your buy` })
    }
    catch (err) {
        console.log('error in your order ', err)
        res.status(400).json({ message: `Something failed in your order ${err}` })
    }

}

export const updateOrder = async (req, res) => {





}

export const deleteOrderById = async (req, res) => {





}