//Declaramos la importación de lo que vamos a proceder a imprimir o usar.
const {mostrarRecetasPreparaciones, mostrarPreparaciones, mostrarCocinerosYPeparaciones,preparaciones, recetas, cocineros,} = require('./EntidadesYFunciones')
// Llamamos a las funciones que queremos imprimir

//CICLO FOR
mostrarRecetasPreparaciones(preparaciones, recetas),
//CICLO FOR..OF
mostrarPreparaciones(preparaciones,recetas,cocineros),
//CICLO FOR EACH
mostrarCocinerosYPeparaciones(cocineros, preparaciones, recetas)



