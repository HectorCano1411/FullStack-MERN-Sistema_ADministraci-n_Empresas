import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/axios";

const AuthContex = createContext()


const AuthProvider = ({children}) => {


    const [cargando, setCargando] = useState(true)
    const [auth, setAuth] = useState({})


    useEffect(() => {
        const autenticarusuario = async () => {

            const token = localStorage.getItem('token')
            if(!token) {
                setCargando(false)
                return

            }
            const config = {
                headers: {
                    "Content-Type":"application/json",
                    Authorization: `Bearer ${token}`
                }
            }
           try {
            const {data} = await clienteAxios('/administrador/perfil', config)

            setAuth(data)

           } catch (error) {
            console.log(error.response.data.msg)
            setAuth({})
            
           }
           setCargando(false)



        }
        autenticarusuario()
    }, [])

    const cerrarSesion = () =>{
        localStorage.removeItem('token')
        setAuth({})

    }

    const actualizarPerfil = async datos => {
        const token = localStorage.getItem('token')
        if(!token) {
            setCargando(false)
            return

        }
        const config = {
            headers: {
                "Content-Type":"application/json",
                Authorization: `Bearer ${token}`
            }
        }
        try {
            const url = `/administrador/perfil/${datos._id}`
            const {data} = await clienteAxios.put(url, datos, config)
            setAuth(data)
            return {
                msg: 'Almacenado  Correctamente'
            }
                
            
        } catch (error) {
                return {
                    msg: error.response.data.msg,
                    error:true
                }            
        }

    }

    const guardarPassword = async (datos) => {
        const token = localStorage.getItem('token')
        if(!token) {
            setCargando(false)
            return

        }
        const config = {
            headers: {
                "Content-Type":"application/json",
                Authorization: `Bearer ${token}`
            }
        }
        try {
            const url ='/administrador/actualizar_password'
            const {data} = await clienteAxios.put(url, datos, config)
            console.log(data)
            return {
                msg: data.msg
            }
            
        } catch (error) {
            return {
                msg: error.response.data.msg,
                error:true
            }
            
        }
    }

    return (
        <AuthContex.Provider
            value = {{
                auth,
                setAuth,
                cargando,
                cerrarSesion,
                actualizarPerfil,
                guardarPassword
            }}
        
        >
            {children}
        </AuthContex.Provider>
    )

}

export {
    AuthProvider
}

export default AuthContex