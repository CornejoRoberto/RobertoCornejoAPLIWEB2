const { model, Schema } = require('mongoose');


const recetaSchema = Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true
        },
        NombrePlato: {
            type: String,
            required: true
        },
        Ingredientes: {
            type: String,
            required: true
        },
        cantidades: {
            type: Number,
            default: 0,
            required: true
        }
    }
);


module.exports = model('Receta', recetaSchema );