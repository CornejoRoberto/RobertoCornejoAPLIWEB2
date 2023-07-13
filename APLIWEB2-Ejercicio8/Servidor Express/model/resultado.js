const { Schema, model } = require("mongoose");




const ResultadoSchema = Schema({

    id_Mesero: {
        type: String,
        required:[true, 'El campo ID Mesero es obligatorio']
    },
    id_Receta: {
        type: String,
        required:[true, 'El campo ID Receta es obligatorio']
    },
    tiempoestimado: {
        type: String,
        required:[true, 'El campo tiempoestimado es obligatorio']
    },
    costo: {
        type: String,
        required:[true, 'El campo costo es obligatorio']
    },
    fecha: {
        type: String,
        required:[true, 'El campo Fecha es obligatorio']
    }
})


module.exports= model('Resultado', ResultadoSchema)