// SE ENCARGA DE CONECTAR TODAS LAS RUTAS

const { Router } = require("express") // importar express

const usuarioRoutes = require("./usuario.routes") // importar el archivo de rutas de usuarios
const medicoRoutes = require("./medico.routes")
const pacienteRoutes = require("./paciente.routes")

const rutas_init = () => { // aca se ponen todas las rutas que existen
  const router = Router() // crear una instancia de express.Router()

  router.use("/usuarios", usuarioRoutes) // para acceder a las rutas de usuarios de la api siempre deberá empezar con /usuarios
  router.use("/medicos", medicoRoutes)
  router.use("/pacientes", pacienteRoutes)
  
  return router // retornar el router
};

module.exports = { rutas_init } // exportar el archivo de rutas de la api
