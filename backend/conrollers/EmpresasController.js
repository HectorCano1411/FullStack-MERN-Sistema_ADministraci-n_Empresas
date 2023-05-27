import Empresas from "../models/Empresas.js"


// OBTENER TODAS LAS EMPRESAS
// creamos la empresa y la asociamos al administrador que tenga segun el id
const agregarEmpresas = async (req , res) => {
    const empresas = new Empresas (req.body)
    empresas.administrador = req.administrador._id 
    try {
        const empresaAlmacenada = await empresas.save()
        res.json(empresaAlmacenada)
    }catch (error) {
        console.log(error)
    }
}
const obtenerEmpresas = async (req , res) => {
    const empresas = await Empresas.find().where('administrador').equals(req.administrador)
    res.json(empresas)
}

// OBTENER SOLO UNA EMPRESA ESPECIFICA POR EL ID
const obtenerEmpresa  = async (req, res) => {
    const { id } = req.params
    const empresa = await Empresas.findById(id)
    if(!empresa) {
        return res.status(404).json({ msg :'empresa no encontrada'})
    }
    if(empresa.administrador._id.toString() !== req.administrador._id.toString()){
        return res.json({ msg : 'Accion no valida'})
    }
        res.json(empresa)
}

// ACTUALIZAR EMPRESA
const actualizarEmpresa  = async (req, res) => {
    const { id } = req.params
    const empresa = await Empresas.findById(id)
    
    if(!empresa){
      return   res.status(404).json({ msg :'empresa no encontrada'})
    }


    if(empresa.administrador._id.toString() !== req.administrador._id.toString()){
        return res.json({ msg : 'Accion no valida'})
    }
  
  // ACTUALIZAR PACINETE

  empresa.nombre = req.body.nombre || empresa.nombre
  empresa.direccion = req.body.direccion  || empresa.direccion
  empresa.email = req.body.email  || empresa.email
  empresa.telefono = req.body.telefono  || empresa.telefono
  empresa.redesSociales = req.body.redesSociales || empresa.redesSociales
  empresa.paginaWeb = req.body.paginaWeb  || empresa.paginaWeb 
  empresa.logotipo= req.body.logotipo || empresa.logotipo
  try {
    const empresaActualizada = await empresa.save()
    res.json(empresaActualizada)

  } catch (errot) {
    console.log (error)
  }
}


const eliminarEmpresa  = async (req, res) => {
    const { id } = req.params
    const empresa = await Empresas.findById(id)
    
    if(!empresa){
      return   res.status(404).json({ msg :'empresa no encontrada'})
    }


    if(empresa.administrador._id.toString() !== req.administrador._id.toString()){
        return res.json({ msg : 'Accion no valida'})
    }
    try {
        await empresa.deleteOne()
        res.json({ msg : '  Empresa Eliminada '})
    }catch (error){
        console.log(error)
    }
}

export { agregarEmpresas,  obtenerEmpresas, obtenerEmpresa, actualizarEmpresa,eliminarEmpresa} 