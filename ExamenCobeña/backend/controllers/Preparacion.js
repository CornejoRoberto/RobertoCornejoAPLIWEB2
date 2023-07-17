const { response, request } = require('express');
const PreparacionP = require('../models/Preparacion');
const Reciclaje = require('../models/papelera');




const PreparacionPGet = async (req, res=response) =>{ 
    const Preparacion = await PreparacionP.find();
        

    
    res.status(200).json(
        {Preparacion})
}
const PreparacionPPost = async (req, res=response) =>{ 
    const { fecha, cantidad, costo } = req.body; 
    const Preparacion = new PreparacionP({  fecha, cantidad, costo })

    await Preparacion.save();
    res.status(200).json(
            {Preparacion}

    )
}





const PreparacionPDelete = async (req= request, res=response) =>{
    const {id}= req.params;
  
        const { fecha, cantidad, costo} = await PreparacionP.findById(id)
        
        const reciclaje = new Reciclaje({ fecha:fecha, cantidad:cantidad, costo:costo })
        await reciclaje.save();
    

        const Preparacion = await PreparacionP.findByIdAndDelete(id)

    res.status(200).json({

        Preparacion

    })
}

module.exports={
PreparacionPDelete,
PreparacionPGet,
PreparacionPPost
}