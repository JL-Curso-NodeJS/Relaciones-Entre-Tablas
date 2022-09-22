// RUTAS DE MEDICOS

const router = require("express").Router() 
const medicoController = require('../controllers/medico.controller')


router.get('/', medicoController.listar)
router.post('/', medicoController.crear)
router.get('/:idMedico', medicoController.listarInfo)



module.exports = router;