const {cocineros, recetas} = require('./Datos');
//CREACION DE LA FUNCIÓN CON EL METODO ASYNC
async function findCocineroAsync(id) {
    const cocinero = cocineros.find(cook => cook.id === id);
    if (!cocinero) {
      throw new Error(`El cocinero no existe: ${id}`);
    }
    const receta = recetas.find(rece => rece.id === id);
    if (!receta) {
      throw new Error(`La receta no existe: ${id}`);
    }
    return {cocinero, receta};
  }
//SE EXPORTA LA FUNCIÓN QUE SE USARÁ EN EL INDEX
  module.exports= {findCocineroAsync};