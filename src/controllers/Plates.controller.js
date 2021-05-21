
/* MODEL */
import {plate} from '../model/dbInitialize.js'

export const getPlates = async (req, res) =>{

    try {
        const plates = await plate.findAll()

        if (!plates)
            return res.status(404).send('No plate found to order')

        res.status(201).send({ data: plates })
    }
    catch (err) {
        res.status(400).send('Something went wrong')
    }

}

export const getPlateById = async (req, res) => {

    const id = req.params.id

    try {
        const plates = await plate.findOne({
            where:{
                id: id
            }
        })

        if (!plates)
            return res.status(404).send(`No plate found with the id ${id}`)

        res.status(201).send({ data: plates })
    }
    catch (err) {
        res.status(400).send('Something went wrong')
    }

}

export const createPlate = async (req, res)  =>{

    const {name,price,description,img} = req.body

    try{
        const plates = await plate.create({name,price,description,img})
        res.status(201).send(`Plate ${plates.name} correctly created`) 
    }
    catch(err){
        res.status(400).send('Something went wrong' , err)
    }
}

export const updatePlate = async (req, res) => {

    const {id,name,price,description,img} = req.body

    try{
        const plates = await plate.update({
            id,name,price,description,img},{
            where:{
                id
            }
        })

        res.status(201).send(`Plate ${id} correctly updated`) 
    }
    catch(err){
        res.status(400).send('Something went wrong' , err)
    }
}

export const deletePlateById = async (req, res) => {

    const id = req.params.id

    try{
        const plates = await plate.destroy({
            where:{
                id: id
            }
        })
        res.status(201).send(`Plate ${id} correctly deleted`) 
    }
    catch(err){
        res.status(400).send('Something went wrong' , err)
    }
}