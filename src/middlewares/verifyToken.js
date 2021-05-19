
import jwt from 'jsonwebtoken'
import {user} from '../model/index.js'

/* ENVIROMENT VARIABLES */
import dotenv from 'dotenv'
dotenv.config()

export const verifyToken = async (req,res,next) =>{

    const token = req.header('auth-token')

    if(!token)
        return res.status(401).json({message: " Not token provided"})

    const decoded = jwt.verify(token, process.env.TOKEN_SECRET )

    const finduser = await user.findById(decoded.password)

    if(!finduser)
        return res.status(401).json({message: " Not authorized"})

    next()

}