// RUTAS DE PACIENTES

const router = require("express").Router()

const pacienteController = require('../controllers/paciente.controller') 


router.get('/', pacienteController.listar)
router.post('/', pacienteController.crear)
router.get('/:idPaciente', pacienteController.listarInfo)



module.exports = router