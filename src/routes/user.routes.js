
const router = require('express').Router()

/* CONNECTION DATABASE */
const db= require('../database')

/* MODELS */
const userModel = require('../model/User')

/* GET ALL THE USERS */
router.get('/', async (req,res)=>{

    try{
        const getusers= await userModel.findAll()
        res.status(200).send({data:getusers})
    }
    catch{
        res.status(400).send('Problem getting users information')
    }

})

module.exports= router