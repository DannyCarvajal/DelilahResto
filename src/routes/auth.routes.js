
const router = require('express').Router()

/* CONNECTION DATABASE */
const db= require('../database')

/* DATABASE MODELS */
const userModel = require('../model/User')

/* VALIDATIONS */
const userDataValidation= require('../middlewares/dataValid')

/* JSON TOKENS */
const jwt = require('jsonwebtoken')

/*CONFIG */
require('dotenv').config()


/* REGISTER */
router.post('/register', userDataValidation ,async (req,res)=>{

    const {Nickname,Name,Email,Password} = req.body

    try{
        const newuser= await userModel.create({Nickname,Name,Email,Password})
        res.status(201).send(`User ${newuser.Nickname} correctly created`) 

    }
    catch(err){
        res.status(400).send('User could not be created '+ err)
    }

})

/* LOGIN */

router.post('/login',async (req,res)=>{

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

        console.log(token)

        res.header('Auth-token',token).send(`User correctly logged , token: ${token}`)
        
    }
    catch{
        console.error('algo anda mal')
    }

})

module.exports = router
