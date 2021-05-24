
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
        res.status(201).json({message:`User ${newuser.nickname} correctly created`}) 

    }
    catch(err){
        res.status(400).json({message:'User could not be created '})
    }
}

export const userLogin = async (req,res)=>{

    const {email,password} = req.body
    
    try{
        /* VERIFY THE EXISTENCE OF THE USER */
        const verifyuser= await user.findOne({
            where:{email:email,password: password }
        })

        if (!verifyuser)
            res.status(400).json({message:`Email or password are incorrect`}) 


        const userId= verifyuser.dataValues.id

        /* CREATE WEB TOKEN  */
        const token= jwt.sign({ id: userId}, process.env.TOKEN_SECRET)

        res.status(200).header('Auth-token',token).json({message: `User correctly logged , token: ${token}`})
    }
    catch(err){
        console.error('Error login user ', err)
        res.status(400).json({message:'User could not be Logged '})
    }
}