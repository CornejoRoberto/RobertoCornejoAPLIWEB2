//Se importa la libreria mongoose
const mongoose = require('mongoose');
//Creamos la variable que permitira la conexión con la base de datos.
const connectionURL = "mongodb+srv://rccc1350642698:rccc1350642698@ejercicio3.db49ods.mongodb.net/Ejercicio3";

//Inicializamos el metodo Async
(async ()=>{
//sentencia Try Catch para controlar excepciones
try {
    //Se realiza la conexion con la base de datos
    const EstadoDeConexion = await mongoose.connect(connectionURL);
    //Creacion del modelo "Preparar Receta"
    const cocinero =  mongoose.model('cocinero', {nombre:String, sueldo:String});
    const receta =  mongoose.model('receta', {nombre: String, ingredientes: String, cantidades: String,});
    const preparacion = mongoose.model('preparacion', {
        //Creamos las relaciones en base al id y el objeto a referenciar.
        idCocinero: {type: mongoose.Types.ObjectId, ref:"cocinero"},
        idReceta: {type:mongoose.Types.ObjectId, ref:"receta"},
        fecha:String, hora:String, cantidad:Number, costo:Number, tiempo:String
    });
      //Se crea e ingresan los valores de la entidad "Cocinero" dentro de la base de datos siguiendo el CRUD
      const cocineroUno = new cocinero({nombre: "Critian", sueldo: "$4256"});
      const guardarcocineroUno = await cocineroUno.save();
      const cocineroDos = new cocinero({nombre: "Michael", sueldo: "$3369"});
      const guardarcocineroDos = await cocineroDos.save();
      const cocineroTres = new cocinero({nombre: " Cristo", sueldo: "$2471"});
      const guardarcocineroTres = await cocineroTres.save();
      //Se crea e ingresan los valores de la entidad "receta" dentro de la base de datos siguiendo el CRUD
      const recetaUno = new receta({nombre: " Encebollado", ingredientes: "pescado , cebolla, yucas, cilantro", 
      cantidades:"3kg de albacora, 1kg de cebolla, 1kg de yucas, 2 ramos de cilantro."});
      const guardarrecetaUno = await recetaUno.save();
      const recetaDos = new receta({nombre: "  Corviche", ingredientes: "plátanos verdes, pescado, maní, cebolla, comino",
      cantidades:"4kg de verde, 1kg de albacora, 1 libra de maní, 4 cebollas, 5 gramos de comino."});
      const guardarrecetaDos = await recetaDos.save();
      const recetaTres = new receta({nombre: 'Costilla BBQ', 
      ingredientes: "costillas de cerdo, salsa barbacoa, pimienta negra, sal, ajo en polvo, cebolla en polvo, mostaza en polvo",
      cantidades:"Un costillar de cerdo, 500 gramos de salsa barbacoa, 10 gramos de pimienta negra, 10 gramos de sal, 10 gramos de ajo en polvo, 10 gramos de cebolla en polvo, 10 gramos de mostaza en polvo."});
      const guardarrecetaTres = await recetaTres.save();
      //Se crea e ingresan los valores de la entidad "Preparacion1" dentro de la base de datos siguiendo el CRUD
      const preparacionUno = new preparacion({
        //Referenciamos al objeto segun la entidad dentro del id
        idCocinero: guardarcocineroDos._id,
        idReceta: guardarrecetaTres._id,
        fecha: "25/04/2023", hora:"13:00", cantidad: 3, costo: 15, tiempo: "30min"
    });
    const guardarPreparacionUno = await preparacionUno.save();
    //Se crea e ingresan los valores de la entidad "Preparacion2" dentro de la base de datos
    const preparacionDos = new preparacion({
        //Referenciamos al objeto segun la entidad dentro del id
        idCocinero: guardarcocineroUno._id,
        idReceta: guardarrecetaDos._id,
        fecha: "26/04/2023", hora:"15:00", cantidad: 1, costo: 8, tiempo: "15min"
    });
    const guardarPreparaciondos = await preparacionDos.save();

    console.log("------LISTA DE COCINEROS------");
    // Obtenemos la lista de cocineros de la base de datos
    const imprimirCocinero = await cocinero.find();
    //MEDIANTE EL CICLO FOR IMPRIMIMOS LOS DATOS DE LOS OBJETOS SIGUIENDO EL CRUD
    for (let i = 0; i < imprimirCocinero.length; i++) {
        console.log("ID: " + imprimirCocinero[i]._id + " | Descripcion: " + imprimirCocinero[i].nombre + "  | Sueldo: " + imprimirCocinero[i].sueldo);
    }
    console.log("------------------------------------------------------------------------------------------------");
    console.log("------LISTA DE RECETAS------");
    // Obtenemos la lista de recetas de la base de datos
    const imprimirRecetas = await receta.find();
    //MEDIANTE EL CICLO FOR OF IMPRIMIMOS LOS DATOS DE LOS OBJETOS SIGUIENDO EL CRUD
    for (const receta of imprimirRecetas) {
    console.log(`ID: ${receta._id} | Nombre: ${receta.nombre} | Ingredientes: ${receta.ingredientes} | Cantidades: ${receta.cantidades}`);
    }
    console.log("------------------------------------------------------------------------------------------------");
    console.log("------LISTA DE PREPARACIONES------");
    // Obtenemos la lista de preparaciones de la base de datos
    const imprimirPreparaciones = await preparacion.find();
    //MEDIANTE EL CICLO FOR EACHIMPRIMIMOS LOS DATOS DE LOS OBJETOS SIGUIENDO EL CRUD
    imprimirPreparaciones.forEach((preparacion) => {
    console.log("ID: " + preparacion._id + " | Fecha: " + preparacion.fecha + " | Hora: " + preparacion.hora + 
    " | Cantidad: " + preparacion.cantidad + " | Costo: " + preparacion.costo + " | Tiempo: " + preparacion.tiempo);
    });

    console.log("------------------------------------------------------------------------------------------------");
    
    //ACTUALIZACION DE DATOS EN APLICACION AL CRUD
    //Usaremos el metodo UPDATE para actualizar los datos.
    const updateCocineroUno = await guardarcocineroUno.updateOne({
        sueldo: "$5969"
    });
    const updatePreparacionDos = await guardarPreparaciondos.updateOne({
        cantidad: 6
    });

    //IMPRESION DE DATOS ACTUALIZADOS
    console.log("----------------------------------------DATOS ACTUALIZADOS----------------------------------------");
    console.log("------LISTA DE COCINEROS------");
    // Obtenemos la lista de cocineros de la base de datos
    const imprimircocineroActualizado = await cocinero.find();
    //MEDIANTE EL CICLO IMPRIMIMOS LOS DATOS DE LOS OBJETOS
    for (let i = 0; i < imprimircocineroActualizado.length; i++) {
        console.log("ID: " + imprimircocineroActualizado[i]._id + " | Descripcion: " + imprimircocineroActualizado[i].nombre + 
        "  | Sueldo: " + imprimircocineroActualizado[i].sueldo);
    }
    console.log("------------------------------------------------------------------------------------------------");
    console.log("------LISTA DE PREPARACIONES------");
    // Obtenemos la lista de preparaciones de la base de datos
    const imprimirprepaActualizados = await preparacion.find();
    //MEDIANTE EL CICLO IMPRIMIMOS LOS DATOS DE LOS OBJETOS
    for (let l = 0; l < imprimirprepaActualizados.length; l++) {
        console.log("ID: " + imprimirprepaActualizados[l]._id + " | Fecha: " + imprimirprepaActualizados[l].fecha + " | Hora: " + imprimirprepaActualizados[l].hora + 
        " | Cantidad: " + imprimirprepaActualizados[l].cantidad + " | Costo: " + imprimirprepaActualizados[l].costo + " | Tiempo: " + imprimirprepaActualizados[l].tiempo);
    }

  //BORRAR DE DATOS DE ACUERDO A LA ESPECIFICACIÓN DEL CRUD 
  console.log("------------------------------------------------------------------------------------------------");
  console.log("BORRAR LISTA DE PREPARACION SEGÚN EL COSTO NECESITADO");
  //Se usa el metodo DELETE ONE para eliminar.
  const borrarCantidad =  await preparacion.deleteOne({costo:15});
  console.log("El dato se ha borrado exitosamente");
  const nuevaPreparacion = await preparacion.find();
  //SE IMPRIMEN LOS DATOS ACTUALIZADOS
  console.log("------------------------------------------------------------------------------------------------");
  console.log(nuevaPreparacion);

} catch (error) {
    //Mensaje de la excepcion
    console.log(error.message);
}
})();

