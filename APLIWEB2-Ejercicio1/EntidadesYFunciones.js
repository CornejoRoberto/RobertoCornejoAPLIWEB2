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
  //OBJETO DEFINIDO POR LA ENTIDAD "RECETA"
  const preparaciones = [
    { id: 1, idMesero: 2, idReceta: 3, fecha: '2002-01-10', hora: '13:00', 
    cantidad: 3, costo: 15, tiempoEstimado: 30 },
    { id: 2, idMesero: 1, idReceta: 1, fecha: '2002-06-10', hora: '14:00', 
    cantidad: 2, costo: 12, tiempoEstimado: 20 },
    { id: 3, idMesero: 3, idReceta: 2, fecha: '2023-03-04', hora: '15:00', 
    cantidad: 1, costo: 8, tiempoEstimado: 15 },
    { id: 4, idMesero: 5, idReceta: 4, fecha: '2011-11-11', hora: '16:00', 
    cantidad: 4, costo: 20, tiempoEstimado: 40 },
    { id: 5, idMesero: 4, idReceta: 5, fecha: '2022-12-12', hora: '17:00', 
    cantidad: 2, costo: 16, tiempoEstimado: 25 }
  ];
  //CREAMOS LA FUNCIÓN QUE VAMOS A USAR PARA EXPORTAR Y MOSTRAR DENTRO DE NUESTRO INDEX
  //LA FUNCIÓN MUESTRA LOS ARREGLOS DE LAS RECETAS Y PREPARACIONES.
  function mostrarRecetasPreparaciones(preparaciones, recetas) {
    console.log('\n          ---RECETAS Y PREPARACIONES--- \n');
    //SE USA EL CICLO FOR OF PARA RECORRER LOS DATOS
    for (const preparacion of preparaciones ) {
        const receta = recetas.find(rec => rec.id === preparacion.idReceta);
        console.log(`   • Receta: ${receta.nombre} 
        Fecha: ${preparacion.fecha} 
        Hora: ${preparacion.hora} 
        Cantidad: ${preparacion.cantidad} Costo: ${preparacion.costo} Tiempo Estimado: ${preparacion.tiempoEstimado}  `);
    }
}

//CREAMOS LA FUNCIÓN QUE VAMOS A USAR PARA EXPORTAR Y MOSTRAR DENTRO DE NUESTRO INDEX
//LA FUNCIÓN MUESTRA LOS ARREGLOS DE COCINEROS, RECETAS Y PREPARACIONES..
function mostrarPreparaciones(preparaciones, cocineros, recetas) {
    console.log('\n          ---COCINEROS, RECETAS Y PREPARACIONES--- \n');
    //SE USA UN CICLO FOR PARA RECORRER LOS DATOS.
    for (let i = 0; i < preparaciones.length; i++) {
        const preparacion = preparaciones[i];
        const mesero = cocineros.find(emp => emp.id === preparacion.idMesero);
        const receta = recetas.find(rec => rec.id === preparacion.idReceta);
        console.log(`   • ID:${preparacion.id} Cocinero: ${receta.nombre} 
        Receta: ${mesero.nombre} 
        Fecha: ${preparacion.fecha} Hora: ${preparacion.hora} 
        Cantidad: ${preparacion.cantidad} Costo: ${preparacion.costo} Tiempo Estimado: ${preparacion.tiempoEstimado}  `);
    }
}

//CREAMOS LA FUNCIÓN QUE VAMOS A USAR PARA EXPORTAR Y MOSTRAR DENTRO DE NUESTRO INDEX
//LA FUNCIÓN MUESTRA LOS ARREGLOS DE COCINEROS Y PREPARACIONES..
function mostrarCocinerosYPeparaciones(cocineros, preparaciones, recetas) {
    console.log('\n          ---COCINEROS Y PREPARACIONES--- \n');
    //SE USA UN CICLO FOR EACH PARA RECORRER LOS DATOS.
    preparaciones.forEach((preparacion) => {
      const cocinero = cocineros.find(coc => coc.id === preparacion.idMesero);
      const receta = recetas.find(rec => rec.id === preparacion.idReceta);
      console.log(`   • Cocinero: ${cocinero.nombre} 
          Sueldo: $ ${cocinero.sueldo}
          Receta: ${receta.nombre} `);
    });
  }
  
//EXPORTAMOS LAS FUNCIONES QUE VAMOS A IMPRIMIR EN NUESTRO INDEX.
module.exports = {
mostrarCocinerosYPeparaciones,
mostrarRecetasPreparaciones,
mostrarPreparaciones,
preparaciones,
recetas,
cocineros,
};
  
  
  
  
  