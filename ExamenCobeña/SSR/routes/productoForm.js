var express = require('express');
var router = express.Router();

const axios = require('axios');

const httpAxios= axios.create({
    baseURL:'http://localhost:9999/api'
})


router.post('/producto/operar', ( req,res,next )=>{

    console.log(req.body)
    if (req.body._id==="")
    {
        httpAxios.post(`/Preparacion`,{
            fecha: req.body.fecha,
            cantidad: req.body.cantidad,
            costo: req.body.costo,
        }).then(respuesta=>{
            res.redirect('/')
        })
    }
    else
    {
        httpAxios.put(`/Preparacion/${req.body._id}`,{
            fecha: req.body.fecha,
            cantidad: req.body.cantidad,
            costo: req.body.costo,
        }).then(respuesta=>{
            res.redirect('/')
        })

    }

})

module.exports = router;