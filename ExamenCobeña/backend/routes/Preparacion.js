const { Router } = require('express');

const { 
    PreparacionPDelete,
    PreparacionPGet,
    PreparacionPPost

} = require('../controllers/Preparacion');




const router = Router(); 


router.get('/', PreparacionPGet )

router.post('/', PreparacionPPost )


router.delete('/:id', PreparacionPDelete )


module.exports= router;