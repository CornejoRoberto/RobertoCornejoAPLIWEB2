const { Schema, model } = require("mongoose");




const PreparacionPSchema = Schema({

    fecha: {
        type: String,
        required:[true, 'El campo fecha es obligatorio']
    },

    cantidad: {
        type: String,
        required:[ true, 'El campo cantidad es obligatorio' ]
    },
    costo: {
        type: String,
        required:[ true, 'El campo costo es obligatorio' ]
    }
})


module.exports= model('PreparacionP', PreparacionPSchema)