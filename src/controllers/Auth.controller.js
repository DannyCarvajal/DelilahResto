
/* DATABASE MODELS */
// import {userModel} from '../model/User.js'

/* RELATIONS */
import {roleModel} from '../model/Role.js'
import {userModel} from '../model/User.js'
import {stateModel} from '../model/State.js'
import {orderModel} from '../model/Order.js'
import {plateModel} from '../model/Plate.js'
import {orderplateModel} from '../model/Order_Plate.js'

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


/* JSON TOKENS */
import jwt from 'jsonwebtoken'

/*CONFIG */
import dotenv from 'dotenv'
dotenv.config()

export const registerUser = async (req,res)=>{

    const {Nickname,Name,Email,Phonenumber,Adress,Password} = req.body

    try{
        const newuser= await userModel.create({Nickname,Name,Email,Phonenumber,Adress,Password})
        res.status(201).send(`User ${newuser.Nickname} correctly created`) 

    }
    catch(err){
        res.status(400).send('User could not be created ')
    }
}

export const userLogin = async (req,res)=>{

    const {Email,Password} = req.body
    
    try{
        /* VERIFY THE EXISTENCE OF THE USER */
        const verifyuser= await userModel.findOne({
            where:{Email:Email,Password: Password }
        })

        if (!verifyuser)
            return res.status(401).send('Email or password are incorrect')

        /* CREATE WEB TOKEN  */
        const token= jwt.sign({ Id: Password}, process.env.TOKEN_SECRET)

        res.header('Auth-token',token).send(`User correctly logged , token: ${token}`)
        console.log(token)
        
    }
    catch{
        console.error('algo anda mal')
    }
}