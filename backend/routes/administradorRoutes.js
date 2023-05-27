import express from "express"
const router = express.Router();
import {registrar, 
        perfil, 
        confirmar, 
        autenticar, 
        olvidePassword, 
        comprobarToken, 
        nuevoPassword
} from '../conrollers/AdministradorController.js'
import checkAuth from "../middleware/authMiddleware.js";

// AREA PUBLICA
router.post('/', registrar)
router.get('/confirmar/:token', confirmar)
router.post('/login', autenticar)
router.post('/olvide_password', olvidePassword)
router.route('/olvide_password/:token').get(comprobarToken).post(nuevoPassword)// reutilizamos el mismo token ya que utilizaremos el mismo para validar el token y para generar un nuevo usuario


// AREA PRIVADA
router.get('/perfil', checkAuth, perfil)


export default router;