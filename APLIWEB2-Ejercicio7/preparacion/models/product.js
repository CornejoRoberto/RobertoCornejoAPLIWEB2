const { model, Schema } = require('mongoose');

const ProductSchema = Schema(
    {
        name:{
            type: String,
            required: [ true, 'El nombre del producto es necesario'],
            unique:true
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        },
        id: {
            type: Number,
            unique: true
        },
        Fecha: {
            type: String,
            default: true,
            required: true
        },
        Hora: {
            type: String,
            default: true
        },
        Cantidad: {
            type: Number,
            default: 0
        },
        Costo: {
            type: Number,
            default: 0
        },
        Tiempo: {
            type: Number,
            default: 0
        },
        cocinero: {
            type: String,
            
            required: false
        },

        category: {
            type: String,
            
            required:false
        },
        receta: {
            type: String,
           
            required: false
        }
    }
);

ProductSchema.methods.toJSON = function(){
    const { __v,  status,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('Product', ProductSchema );