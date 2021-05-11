
/* MODEL */
const plateModel = require('../model/Plate')

module.exports={  
    getPlates: async function (req,res){

    const plates = await plateModel.findAll() 

    try{
        if(!plates)
            return res.status(404).send('No plate found to order')

        res.status(201).send({data: plates})
    }
    catch(err){
        res.status(400).send('Something went wrong')
    }

    },

    getPlateById: async function(req,res){

    
    },



    createPlate: async function(req,res){

    
    },

    updatePlate: async function(req,res){

    
    },


    deletePlateById: async function(req,res){


    }
}