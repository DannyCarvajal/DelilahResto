

/* MODELS */
import {userModel} from '../model/User.js'


export const getUsers= async (req,res)=>{

    try{
        const getusers= await userModel.findAll()
        res.status(200).send({data:getusers})
    }
    catch{
        res.status(400).send('Problem getting users information')
    }
}

export const deleteUserById = async (req, res) => {

    const id = req.params.id

    try{
        const deleteUser = await userModel.destroy({
            where:{
                User_Id: id
            }
        })
        res.status(201).send(`User ${id} correctly deleted`) 
    }
    catch(err){
        res.status(400).send('Something went wrong' , err)
    }
}