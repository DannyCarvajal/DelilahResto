
import jwt from 'jsonwebtoken'
import {userModel} from '../model/User.js'

/* ENVIROMENT VARIABLES */
import dotenv from 'dotenv'
dotenv.config()

export const verifyToken = async (req,res,next) =>{

    const token = req.header('auth-token')

    if(!token)
        return res.status(401).json({message: " Not token provided"})

    const decoded = jwt.verify(token, process.env.TOKEN_SECRET )

    const user = await userModel.findById(decoded.password)

    if(!user)
        return res.status(401).json({message: " Not authorized"})

    next()

}