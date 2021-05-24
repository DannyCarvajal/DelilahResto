
/* MODEL */
import connection from '../database.js'
import {Sequelize} from 'sequelize'
const {QueryTypes} = Sequelize

import { user,order, orderplate, plate } from '../model/dbInitialize.js'


export const getOrders = async (req, res) => {

    try{
        const orderList = await order.findAll()
        let messageSend = []


        for await (const element of orderList) {

            let fullOrderList = {}

            /* ORDER ID */
            fullOrderList.orderId = element.dataValues.id
            
            /* USER DATA  */
            const clientId= element.dataValues.userId
            const clientSearch = await user.findAll({
                where:{
                    id:clientId
                }
            })
            const clientData= clientSearch[0].dataValues

            /* APPEND USER DATA TO THE OBJECT */
            fullOrderList.username = clientData.name
            fullOrderList.phonenumber = clientData.phonenumber
            fullOrderList.adress = clientData.adress
            
            /* APPEND ORDER DATA TO THE OBJECY */
            fullOrderList.total = element.dataValues.total
            fullOrderList.payMethod = element.dataValues.payMethod
            
            let orderplateSearch = await orderplate.findAll({
                where:{
                    orderId: element.dataValues.id
                }
            })

            /* APPEND EACH PLATE TO THE OBJECT*/
            if(orderplateSearch){
                let plates =[]
                orderplateSearch.forEach( async (element) => {
                    let plate = {}
                    plate.plateId = element.dataValues.plateId
                    plate.quantity = element.dataValues.quantity
                    plates.push(plate)
                })
                fullOrderList.plates= plates
            }

            fullOrderList.stateId = element.dataValues.stateId
            messageSend.push(fullOrderList)
        }

        res.status(200).json({message : messageSend})

    }
    catch(err){
        res.status(200).json({message:' Couldnt get any order'})
    }

}


export const getOrderById = async (req, res) => {





}

export const createOrder = async (req, res) => {

    const { payMethod, plates } = req.body
    const userData = req.userData
    let total = 0

    try {
        /* GET PLATE VALUES AND TOTAL*/
        for await (const element of plates) {

            const foundPlate = await plate.findOne({
                where: {
                    id: element.id
                }
            })

            if (!foundPlate)
                return res.status(404).json({ message: `Plate ${element.id} not found` })

            const platePrice = foundPlate.dataValues.price
            const finalPriceByPlate = platePrice * element.quantity

            console.log(platePrice, '* ', element.quantity, ' =', finalPriceByPlate)

            total += finalPriceByPlate
        }

        await order.create({
            total, payMethod, userId: userData.id
        })

        /* GET THE LAST ID  */
        const [lastIdQuery] = await connection.query('SELECT max(id) FROM orders ',{type: QueryTypes.SELECT})
        const lastId = Object.values(lastIdQuery)[0]

        /*  CREATE ORDERPLATE MODEL  */
        for await (const element of plates) {

            await orderplate.create({
                orderId:  lastId,
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