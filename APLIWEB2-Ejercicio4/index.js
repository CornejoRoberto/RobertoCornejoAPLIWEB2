const path = require("path");
const express = require("express");
const cors =  require("cors");
const PORT= 2500;
const app =  express();
app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public'))

let receta=[]
//CONSULTAR INFORMACIÓN MEDIANTE GET
app.get('/', (req,res)=>{
    res.status(200).send(receta);
})
//CONSULTAR INDIVIDUALMENTE MEDIANTE GET
app.get('/:Receta',(req,res)=>{
    const {Receta} = req.params
    const filtro =receta.filter(p=> p.Receta===Receta)
    if (filtro.length>0)
    {
        res.status(200).send(filtro[0])
    }
    res.status(403).send({
        message:'La receta no se encontró'
    })
})
//INSERTAR INFORMACION MEDIANTE POST
app.post('/', (req,res)=>{
    const {body} = req
    receta.push(body);
    res.status(201).send({
        message:'Dato insertado correctamente',
        response: body
    });
})
//ACTUALIZAR INFORMACION MEDIANTE PUT
app.put('/', (req,res)=>{
    const{id, Receta, Ingredientes, Cantidades}=req.body;
    let informacion = receta.filter(p=> p.Receta === Receta)[0] || {}
    informacion.Cantidades = Cantidades;
    res.status(202).send({
        message:'El dato ha sido modificado correctamente.',
        response:informacion
    })
})
//ELIMINAR INFORMACION MEDIANTE DELETE
app.delete('/:Receta', (req,res)=>{
    const{Receta}= req.params
    receta = receta.filter(p=>p.Receta !== Receta)
    res.status(200).send({
        message: 'Se eliminó el elemento'
    });
})
//LISTEN DEL PUERTO
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo http://localhost:${PORT}`);
})