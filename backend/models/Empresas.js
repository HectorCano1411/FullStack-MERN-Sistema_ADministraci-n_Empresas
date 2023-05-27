import mongoose from "mongoose";


const empresasSchema = mongoose.Schema({

    nombre :{
        type: String,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    telefono: {
        type: String,
        required: true,
    },
    redesSociales: {
        type: String,
        required: true,
    },
    paginaWeb: {
        type: String,
        required: null,
    },
    logotipo: {
        type: String,
        required: true,
    },
    administrador: {
         type: mongoose.Schema.Types.ObjectId,
        ref: "Administrador",
    },    
},

{
    timestamps: true,
}
)

const Empresas = mongoose.model('Empresas', empresasSchema)

export default Empresas


