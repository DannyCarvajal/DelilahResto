
import jwt from 'jsonwebtoken'
import {user} from '../model/dbInitialize.js'

/* ENVIROMENT VARIABLES */
import dotenv from 'dotenv'
dotenv.config()

export const verifyToken = async (req,res,next) =>{

    try{
        /* TOKEN EXISTENCE */
        const token = req.header('auth-token')
    
        if(!token)
            return res.status(401).json({message: " Not token provided"})
    
        /* TOKEN VALIDATION */
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET )
    
        const finduser = await user.findOne({
            where:{
            id: decoded.id}
        })

        if(!finduser)
            return res.status(401).json({message: " Not authorized"})

        /* DATA OF THE TOKEN PROVIDED */
        let userData = finduser.dataValues
        req.userData= userData
    
        next()
    }
    catch(err){
        console.log('Something happened verifying token ', err)
        return res.status(401).json({message: "Error in token validation"})

    }

}