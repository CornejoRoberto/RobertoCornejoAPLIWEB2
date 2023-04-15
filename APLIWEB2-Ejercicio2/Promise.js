const {cocineros, recetas} = require('./Datos');
//CREACION DE LA FUNCIÓN CON EL METODO PROMISE
function findCocineroPromise(id) {
    return new Promise((resolve, reject) => {
      const cocinero = cocineros.find(cook => cook.id === id);
      if (!cocinero) {
        reject(`El cocinero no existe: ${id}`);
        return;
      }
      const receta = recetas.find(rece => rece.id === id);
      if (receta) {
        resolve({cocinero, receta});
      } else {
        reject(`La receta no existe: ${id}`);
      }
    });
  }
  //SE EXPORTA LA FUNCIÓN QUE SE USARÁ EN EL INDEX
  module.exports= {findCocineroPromise};