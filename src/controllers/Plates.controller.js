
/* MODEL */
import {plateModel} from '../model/Plate.js'

export const getPlates = async (req, res) =>{

    try {
        const plates = await plateModel.findAll()

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
        const plates = await plateModel.findOne({
            where:{
                Plate_Id: id
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

    const {Name,Price,Description,Img} = req.body

    try{
        const plates = await plateModel.create({Name,Price,Description,Img})
        res.status(201).send(`Plate ${plates.Name} correctly created`) 
    }
    catch(err){
        res.status(400).send('Something went wrong' , err)
    }
}

export const updatePlate = async (req, res) => {

    const {Plate_Id,Name,Price,Description,Img} = req.body

    try{
        const plates = await plateModel.update({
            Plate_Id,Name,Price,Description,Img},{
            where:{
                Plate_Id
            }
        })

        res.status(201).send(`Plate ${Plate_Id} correctly updated`) 
    }
    catch(err){
        res.status(400).send('Something went wrong' , err)
    }
}

export const deletePlateById = async (req, res) => {

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
}