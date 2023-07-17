const { Router } = require('express');

const { 

PapeleraGet,
PapeleraDelete
} = require('../controllers/papelera');




const router = Router(); 


router.get('/', PapeleraGet )

router.delete('/:id', PapeleraDelete)


module.exports= router;