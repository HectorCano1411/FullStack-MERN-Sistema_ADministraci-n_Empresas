import jwt from 'jsonwebtoken'
import Administrador from '../models/Administrador.js';


// generamos la funcion middleware para hacer un checkauth 
// una vez que visito perfil abre el middleware ejecuta la funcion y luego uytilizando la funcion por defecto NEXT nos envia al perfil y comienza a ejecutar su codigo de perfil
// mandamos el token al ambiente y guardamos los cambios
// despues validamos en el request de  obtener perfil para saber si el token es valido 
// en el caso de ser valido nos muestra el usuario
// en caso de no ser valido nos muestra  mensaje de tokew no valido
// separa el bearer del token mediante la funcion split con un espacio 
// aplicamos la funcion decoded verify al token y a la palabra secreta para verificarlo
// una vez que tenemos el token autorizado y veridficado podemos buscar por el id
// mediante la funcion por defecto select escondemos los campos que no queremos que se muestren
const checkAuth = async (req, res, next) => {
    let token;
   if(
    req.headers.authorization && req.headers.authorization.startsWith('Bearer')
    ){
    try {
      token =  req.headers.authorization.split(' ')[1]
     
      const decoded = jwt.verify(token, process.env.JWT_SECRET )
      req.administrador = await Administrador.findById(decoded.id).select(' -password -token -confirmado')
      return next()
    } catch (error)  {
        const e = new Error('Token no valido')
        return res.status(403).json({msg: e.message})
    }
   }
   if(!token){
    const error = new Error('Token no valido o inexistente')
    res.status(403).json({msg: error.message})
   }
    next()
}

export default checkAuth