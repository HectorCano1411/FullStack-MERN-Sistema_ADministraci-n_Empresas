import express from "express";

const router = express.Router()

import {agregarEmpresas,  obtenerEmpresas, obtenerEmpresa, actualizarEmpresa,eliminarEmpresa} from '../conrollers/empresasController.js'

import checkAuth from "../middleware/authMiddleware.js";

router.route('/')
.post(checkAuth,agregarEmpresas)
.get(checkAuth, obtenerEmpresas)

router
.route('/:id')
.get(checkAuth, obtenerEmpresa)
.put(checkAuth, actualizarEmpresa)
.delete(checkAuth, eliminarEmpresa)

export default router;