const mongoose = require('mongoose');

const database_mongodb = async () =>{
    try {
        await mongoose.connect( 'mongodb+srv://rccc1350642698:rccc1350642698@ejercicio3.db49ods.mongodb.net/',  {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Base de Datos online');
    } catch (error) {
        console.log(error);
        throw new Error('Error en la base de datos')
    }
}


module.exports={
    database_mongodb
}