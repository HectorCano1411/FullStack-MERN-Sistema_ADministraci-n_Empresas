// rsfce
import { useState } from "react"
import { Link } from "react-router-dom"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/axios"



const OlvidePassword = () => {
    const [email , setEmail] = useState('')
    const [alerta, setAlerta] = useState({})

    const handleSubmit = async e => {

        e.preventDefault()

        if(email === '' || email.length < 6 ) {
            setAlerta({msg: 'El Email es obligatorio ', error: true})
            return
        }
    

    try {
        const {data} = await clienteAxios.post('/administrador/olvide_password', {email})

       
        setAlerta({msg: data.msg})
        console.log(data)

    }catch(error){
        setAlerta({
            msg: error.response.data.msg, 
            error: true
        })

    }
}


    const {msg} = alerta

  return (
    <>
         <div>
            1 <div>
                <h1 className="text-indigo-600 font-black text-6xl"  > 
                Recupera tu acceso y no pierdas {''}
                <span className="text-black"> tus Empresas</span>
                </h1>
            </div>   
        </div>

        <div className="mt-20  md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">

                {msg && <Alerta
                    alerta = {alerta}
                        
                />}
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-xl font-bold">
                            Email   
                        </label>
                        <input type='email'
                        placeholder= 'ingrese su email'
                        className="border w-full p-3 mt-3 bg-gray-200 rounded-xl"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <input 
                        type="submit"
                        value='Enviar Validación'
                        className="bg-indigo-600 w-full py-3 px-10  rounded-xl
                        text-white uppercase font-bold mt-5
                        hover:cursor-pointer md:w-auto
                        hover:bg-indigo-900 "
                    />    

                </form>
                
                 <nav className="mt-10 lg:flex lg:justify-between">
                    <Link  
                    className="block text-center my-5 text-gray500 border w-full p-3 mt-3 rounded-xl bg-indigo-300 hover:bg-slate-400"
                    to= '/'>¿Ya Tienes una cuenta? inicia Sesión</Link>
                          <Link  
                className="block text-center my-5 text-gray500 border w-full p-3 mt-3 rounded-xl bg-indigo-300 hover:bg-slate-400"
                to= '/registrar'>¿No tienes una cuenta? Regístrate </Link>
                </nav>    
        </div>           
    </>     
  )
}

export default OlvidePassword
