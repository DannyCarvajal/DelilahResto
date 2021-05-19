
import jwt from 'jsonwebtoken'

export const verifyToken = (req,res,next) =>{

    const token = req.header('auth-token')

    // await jwt.verify(token)


    if(!token)
        return res.status(401).send('Not authorized')

    next()

}