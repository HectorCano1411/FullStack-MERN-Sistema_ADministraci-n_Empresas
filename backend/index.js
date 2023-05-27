import express from "express";
import dotenv from "dotenv";
import cors from 'cors'
import conectarDB from "./config/db.js";
import administradorRoutes from './routes/administradorRoutes.js'
import empresasRoutes from './routes/empresasRoutes.js'

const app = express();

app.use(express.json())

dotenv.config()

conectarDB()

const dominiosPermitidos = ['http://localhost:5173']

const corsOptions = {
    origin: function(origin, collback){
        if (dominiosPermitidos.indexOf(origin) !== -1) {
            // el origen del Request esta permitido
            collback(null, true)
        }else {
            collback(new Error('No permitido por CORS'))
        }
    }
}

app.use(cors(corsOptions))
app.use("/api/administrador", administradorRoutes )
app.use("/api/empresas", empresasRoutes )

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor Funcionando en el puerto ${PORT}`);
});