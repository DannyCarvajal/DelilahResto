
/* DATABASE MODELS */
import {user} from '../model/dbInitialize.js'

/* JSON TOKENS */
import jwt from 'jsonwebtoken'

/*CONFIG */
import dotenv from 'dotenv'
dotenv.config()

export const registerUser = async (req,res)=>{

    const {nickname,name,email,phonenumber,adress,password} = req.body

    try{
        const newuser= await user.create({nickname,name,email,phonenumber,adress,password})
        res.status(201).send(`User ${newuser.nickname} correctly created`) 

    }
    catch(err){
        res.status(400).send('User could not be created ')
    }
}

export const userLogin = async (req,res)=>{

    const {email,password} = req.body
    
    try{
        /* VERIFY THE EXISTENCE OF THE USER */
        const verifyuser= await user.findOne({
            where:{email:email,password: password }
        })

        const userId= verifyuser.dataValues.id

        if (!verifyuser)
            return res.status(401).send('Email or password are incorrect')

        /* CREATE WEB TOKEN  */
        const token= jwt.sign({ id: userId}, process.env.TOKEN_SECRET)

        res.header('Auth-token',token).send(`User correctly logged , token: ${token}`)
        console.log(token)
        
    }
    catch(err){
        console.error('algo anda mal', err)
    }
}