const { response, request } = require('express');
const PreparacionP = require('../models/Preparacion');
const Papelera = require('../models/papelera');


const PapeleraGet = async (req, res=response) =>{ 

    const papelera = await Papelera.find();
    res.status(200).json(
        papelera
    )
}


const PapeleraDelete = async (req= request, res=response) =>{
    const {id}= req.params;
  
        const {fecha, cantidad, costo} = await Papelera.findById(id)
        
        const Preparacion = new PreparacionP({fecha:fecha, cantidad:cantidad, costo:costo })
        await Preparacion.save();
    

        const papelera = await Papelera.findByIdAndDelete(id)

    res.status(200).json({

        papelera

    })
}
module.exports={
    PapeleraGet,
    PapeleraDelete
}