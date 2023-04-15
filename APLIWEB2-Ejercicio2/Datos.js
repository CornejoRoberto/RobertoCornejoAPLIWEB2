//OBJETO DEFINIDO POR LA ENTIDAD "COCINERO"
const cocineros = [
    { id: 1, nombre: 'Critian', sueldo: 4256 },
    { id: 2, nombre: 'Michael', sueldo: 3369 },
    { id: 3, nombre: 'Cristo', sueldo: 2471 },
    { id: 4, nombre: 'Giusepi', sueldo: 2456 },
    { id: 5, nombre: 'Roberto', sueldo: 5555 }
  ];

//OBJETO DEFINIDO POR LA ENTIDAD "RECETA"
  const recetas = [
    { id: 1, nombre: 'Encebollado', ingredientes: ['pescado', 'cebolla', 'yucas', 'cilantro']},
    { id: 2, nombre: 'Corviche', ingredientes: ['plátanos verdes', 'pescado', 'maní', 'cebolla', 'comino'] },
    { id: 3, nombre: 'Costilla BBQ', ingredientes: ['costillas de cerdo', 'salsa barbacoa', 'pimienta negra', 'sal', 'ajo en polvo', 'cebolla en polvo', 'mostaza en polvo']},
    { id: 4, nombre: 'Ceviche', ingredientes: ['pescado blanco', 'limón', 'cebolla roja', 'cilantro', 'tomate', 'sal', 'pimienta']},
    { id: 5, nombre: 'Salchipapa', ingredientes: ['salchicha', 'papas', 'salsa', 'queso']},
  ];

  //Función que muestre uno de los objetos del arreglo transaccional, que en este caso sera "Nombre" y los datos de su entidad relacionada.
  //Esta función es la base para la creación de los Metodos async y promise.
  function buscarCocinero(id) {
    const cocinero = cocineros.find(cook => cook.id === id);
    if (!cocinero) {
      console.log(`No se encontró el cocinero con el id otorgado.${id}`);
      return;
    }
    console.log(`Nombre: ${cocinero.nombre}`);
    const receta = recetas.find(rece => rece.id === id);
    if (receta) {
      console.log(`Nombre de la Receta: ${receta.nombre}`);
      console.log(`Ingredientes: ${receta.ingredientes.join(', ')}.`);
    } else {
      console.log(`No se encontró la receta.${id}`);
    }
  }
  //buscarCocinero(5)

//SE EXPORTAN LOS OBJETOS QUE SERÁN UTILIZADOS
  module.exports= {cocineros,recetas};

  