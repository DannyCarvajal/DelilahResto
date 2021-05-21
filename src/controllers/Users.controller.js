

/* MODELS */
import {user} from '../model/dbInitialize.js'


export const getUsers= async (req,res)=>{

    try{
        const getusers= await user.findAll()
        res.status(200).send({data:getusers})
    }
    catch{
        res.status(400).send('Problem getting users information')
    }
}

export const deleteUserById = async (req, res) => {

    const id = req.params.id

    try{
        const deleteUser = await user.destroy({
            where:{
                id: id
            }
        })
        res.status(201).send(`User ${id} correctly deleted`) 
    }
    catch(err){
        res.status(400).send('Something went wrong' , err)
    }
}