import mongoose from "mongoose";
import generarId from "../helpers/generaID.js";
import bcrypt from "bcrypt";


// creamos el modelo que almacenaremos en la base  de datos
const adminSchema = mongoose.Schema({
    nombre: {
        type: String,
        requiered: true,
        trim: true
    },
    password:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    telefono: {
        type: String,
        default: null,
        trim: true
    },
    web: {
        type: String,
        default: null
    },
    token: {
        type: String,
        default: generarId(),
    },
    confirmado: {
        type: Boolean,
        default: false
    }
})


// antes de almacenar en la bae de datos modificamos el password para hashear el password
// instalamos la libreria para encriptar el password
// validamos con un if para que el password no se vuelva a hashear una vez que se hagan modificaciones en los datos del usuario
adminSchema.pre('save', async function(next) {
    if(!this.isModified('password')){
        next()
    }
// utilisamos el salt y gensalt para generar los saltod de encriptacion y reescribir y hashear el password
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
} )


// comprobamos el password del usuario y comparamos el password que el usuario escribio en el formulario
// mediante la funcion compare hace la comparacion con el password hasheado 

adminSchema.methods.comprobarPassword = async function(
    passwordFormulario
) {
    return await bcrypt.compare( passwordFormulario, this.password)
}



const Administrador = mongoose.model("Administrador",adminSchema);
export default Administrador;