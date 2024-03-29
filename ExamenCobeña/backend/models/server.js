const express = require('express') 
var cors = require('cors');
const path  = require('path')
const exphbs  = require('express-handlebars')
const { conecxionBaseDatos } = require('../database/db');

class Server{  
    
    constructor(){ 
        this.app= express(); 
        this.port= 9999;

        this.RegistroPPath= '/api/registro'
        this.PapeleraPath= '/api/papelera'

        this.dbConection();

        this.middlewares();
        this.routes(); 
    }

    middlewares(){


        this.app.use(cors());


        this.app.use( express.json() );


        this.app.use( express.static( 'public' ));
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.engine('.hbs', exphbs.engine(
            {
                layoutsDir: path.join(this.app.get('views'), 'layouts')

            }
        ));
    }

    async dbConection(){
        await conecxionBaseDatos()
    }

    routes(){

       this.app.use( this.RegistroPPath, require('../routes/Preparacion') );
       this.app.use( this.PapeleraPath, require('../routes/papelera') );
    }

    listen(){ 
        this.app.listen( this.port, () =>{
            console.log('Servidor corriendo en el puerto', this.port);
        
        })
    }
}

module.exports=Server;