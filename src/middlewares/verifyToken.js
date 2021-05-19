
import jwt from 'jsonwebtoken'
import {user} from '../model/index.js'

/* ENVIROMENT VARIABLES */
import dotenv from 'dotenv'
dotenv.config()

export const verifyToken = async (req,res,next) =>{


    try{
        const token = req.header('auth-token')
    
        if(!token)
            return res.status(401).json({message: " Not token provided"})
    
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET )
        console.log(decoded)
    
        const finduser = await user.findOne({
            where:{
            password: decoded.id}
        })
    
        if(!finduser)
            return res.status(401).json({message: " Not authorized"})
    
        next()
    }
    catch(err){
        console.log('Something happened verifying token ', err)
    }

}