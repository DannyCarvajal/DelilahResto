
const router = require('express').Router()

/* CONNECTION DATABASE */
const db= require('../database')

/* MODELS */
const plateModel = require('../model/Plate')

/* VALIDATION */
const verifyToken = require('../middlewares/verifyToken')

/* CONTROLLERS */
const {getPlates} = require('../controllers/Plates.controller')


/* PLATES */

/* GET THE PLATES AVAILABLE */
router.get('/', getPlates )


/* POST A NEW PLATE */
router.post('/', async (req,res)=>{

    const {Name,Price,Description,Img} = req.body

    try{
        const plates = await plateModel.create({Name,Price,Description,Img})
        res.status(201).send(`Plate ${plates.Name} correctly created`) 
    }
    catch(err){
        res.status(400).send('Something went wrong' , err)
    }

})


/* UPDATE A PLATE */
router.put('/', async (req,res)=>{

    const {Plate_Id,Name,Price,Description,Img} = req.body

    try{
        const plates = await plateModel.update({
            Plate_Id,Name,Price,Description,Img},{
            where:{
                Plate_Id
            }
        }
        )
        res.status(201).send(`Plate ${Plate_Id} correctly updated`) 
    }
    catch(err){
        res.status(400).send('Something went wrong' , err)
    }

})


/* DELETE A PLATE */
router.delete('/:id', async (req,res)=>{

    const id = req.params.id

    try{
        const plates = await plateModel.destroy({
            where:{
                Plate_Id: id
            }
        })
        res.status(201).send(`Plate ${id} correctly deleted`) 
    }
    catch(err){
        res.status(400).send('Something went wrong' , err)
    }

})


module.exports= router