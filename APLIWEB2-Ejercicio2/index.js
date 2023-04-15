const {findCocineroAsync} = require('./ASYNC');
const {findCocineroPromise} = require('./Promise');

//IMPRESION DE LA FUNCIÓN CON EL METODO ASYNC
(async () => {
    try {
      const {cocinero, receta} = await findCocineroAsync(1);
      console.log("----------------------FUNCIÓN ASYNC------------------------");
      console.log(`Cocinero: ${cocinero.nombre}`);
      console.log(`Receta: ${receta.nombre}`);
      console.log(`Ingredientes: ${receta.ingredientes.join(', ')}.`);
      console.log("-------------------------------------------------------------");
    } catch (error) {
      console.log(error.message);
    }
  })();
  
//IMPRESION DE LA FUNCIÓN CON EL METODO PROMISE
  findCocineroPromise(2)
  .then(({cocinero, receta}) => {
    console.log("----------------------FUNCIÓN PROMISE------------------------")
    console.log(`Cocinero: ${cocinero.nombre}`);
    console.log(`Receta: ${receta.nombre}`);
    console.log(`Ingredientes: ${receta.ingredientes.join(', ')}.`);
    console.log("-------------------------------------------------------------")
  })
  .catch((error) => {
    console.log(error);
  });

  


