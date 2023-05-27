import jwt from 'jsonwebtoken'

// generamos la funcion del token secreto 
// por medio del id del usuario generamos el JWT
// damos un rango de tiempo para que expire el token secreto
const generarJWT = (id) =>  {
    return jwt.sign({id} , process.env.JWT_SECRET, {
        expiresIn: "30d"
    })

}

export default generarJWT