import Administrador from "../models/Administrador.js";
import generarJWT from "../helpers/generarJWT.js";
import generarId from "../helpers/generaID.js";
import emailRegistro from "../helpers/emailRegistro.js";


// registramos un usuario en el request de postman con los campos a llenar del model schema, 
// hacemos la validacion si el usuario ya existe para no tener usuarios duplicados mediante la comparacion de email,
// una vez validado enviamos  mensage de usuario registrado en caso contrario  es envi9ado un mensaje de error
const registrar = async (req, res)=>{
    // console.log(req.body);
    
    const {email, nombre } = req.body

    // Prevenir usuarios registrados
    const existeUsuario = await Administrador.findOne({email});

    if(existeUsuario) {
        const error = new Error(' Usuario ya Registrado')
        return res.status(400).json({msg : error.message});
    }

    try{
    // Guardar nuevo veterinario
      const administrador = new Administrador(req.body)
      const administradorGuardado = await administrador.save();

    // ENVIAR EMAIL
    emailRegistro({
        email,
        nombre,
        token:administradorGuardado.token
    });

      res.json(administradorGuardado );
    } catch (error) {
        console.log(error);
    }

};
// mostramos los datos almacenados en la base de datos 
const perfil = (req, res)=>{
// extraemos la informacion del request una vez el usuario este autenticado
    const { administrador} = req
// mostramos los datos del usuario que fueron extraidos desde el request
    res.json({ perfil: administrador});
};


// consulto mi base de datos utilizando el token en el request, reviso si tengo un usuario real, si el usuario existe envia mensaje de confirmacion,
// en caso contrario envia mensaje de error, luego ocultamos el token y finalmente cambiamos el campo de confirmado a true 
const confirmar = async (req, res) => {
    const { token } = req.params

    const usuarioConfirmar = await Administrador.findOne({token})
    
    if(!usuarioConfirmar) {
        const error = new Error(' Token no valido');
        return res.status(404).json({ msg: error.message });
    }

    try {
        usuarioConfirmar.token = null;
        usuarioConfirmar.confirmado = true;
        await usuarioConfirmar.save();

        res.json({ msg: 'Usuario confirmado Correctamente '});

    } catch (error) {
        console.log(error)
    }
};

// una vez confirmada la cuenta con el token pasamos la autenticacion del usuario,
// en este caso autenticaremos via email y password 
// hacemos la consulta del email para ver si el usuario existe en caso que no exista se manda mensaje de usuario no existe
// luego comprobamos si la cuenta fue confirmada via token en caso de no ser confirmada manda mensaje avisando que falta confiremar la cuenta
// luego confirmamos el password del usuario  y autenticamos mediante el campo de ID
// en caso de ingresar un password incorrecto es envciado un mensaje de password invalido
const autenticar = async (req ,res) => {
     const { email, password } = req.body
    //  Comprobar si el Usuario existe
    const usuario = await Administrador.findOne({email})
    if(!usuario) {
        const error = new Error(' El Usuario No Existe ')
        return res.status(404).json({ msg: error.message })
    }
// Comprobar si el Usuario esta Confirmado
    if(!usuario.confirmado) {
        const error = new Error('Tu Cuenta No ha sido Confirmada')
        return res.status(403).json({ msg: error.message})
    }
    
// Revisar el password
// reutilizamos la funcion que fue creada en el modulo de models para comprobar el password
    if(await usuario.comprobarPassword(password)) {
   
        // Autenticar
        res.json({token: generarJWT(usuario.id)})
    }else {
        const error = new Error('El Password es Invalido')
        return res.status(403).json({ msg: error.message})
    }
   
}


// validamos el email del usuario
// comprobamos en el request por medio del email si el usuario existe haciendo una consulta en la base de datos para wue muestre el el primero que coincida con el email
// en caso que no exista el email un mensaje de usuario no existe 
// si el usuario si existe generamos un toke y lo mandamos por email para que siga las instrucciones
// guardamos el id generado para enviarlo al usuario
const olvidePassword =  async(req, res) => {
    const {email} = req.body
    const existeAdministrador  = await Administrador.findOne({email})
    if(!existeAdministrador){
        const error = new Error('El Usuario no Existe')
        return res.status(400).json({msg: error.message})
    }
    try {
        existeAdministrador.token = generarId()
        await existeAdministrador.save()
        res.json({msg: 'Hemos enviado un email  con las instrucciones'})
    }catch (error) {
        console.log(error)
    }
}
// leemos el token
// verificamos si el token es valido buscando en la base de datos y buscamos que usuario esta haciendo la peticion de olvide contraseña
// si es valido enviamos un mensaje de token valido
// si no es valido mandamos mensaje de token no valido
const comprobarToken = async (req, res) => {
    const {token} = req.params

    const tokenValido = await Administrador.findOne({token})
    if(tokenValido){
    // el token es valido el udusrio existe
    res.json({msg: 'Token valido el usuario existe'})
    }else {
        const error = new Error('Token no valido')
        return res.status(400).json({msg: error.message})
    }
}
// almacenamos el nuevo usuario
// seguimos validando el mismo token
// y validamos el password del usuario
// buscamos el token lo validamos 
// en caso de no existir el usuario se envia un mensaje de error
// si el token es valido lo dejamos como NULL para que sea eliminado del formulario en pantalla
// guardamos cambios y enviamos el mensaje de password modificado
const nuevoPassword = async (req, res) => {
    const {token} = req.params
    const {password} = req.body

    const administrador = await Administrador.findOne({token})
    if(!administrador){
        const error = new Error('Hubo un error')
        return res.status(400).json({msg: error.message})
    }
    try{
        administrador.token = null
        administrador.password = password
        await administrador.save()
        res.json({msg: 'Password modificado correctamente'})
    } catch (error) {
        console.log(error)
    }

}


export {registrar, perfil, confirmar, autenticar, olvidePassword, comprobarToken, nuevoPassword}