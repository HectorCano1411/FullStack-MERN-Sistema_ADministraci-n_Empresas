import { useState } from "react"
import AdminNav from "../components/AdminNav"
import Alerta from "../components/Alerta"
import useAuth from "../hooks/useAuth";
import Logo3 from "../img/Logo CDN SECUNDARIO Color.jpg";


const CambiarPassword = () => {

    const {guardarPassword} = useAuth()

    const [alerta, setAlerta] = useState({})
    const [password, setPassword] = useState({
        pwd_actual: '',
        pwd_nuevo: ''
    })

    const handleSubmit = async e =>{
        e.preventDefault()

        if(Object.values(password).some(campo => campo === '')){
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }
        if(password.pwd_nuevo.length < 6 ){
            setAlerta({
                msg: 'El Password debe tener mínimo 6 caracteres',
                error: true
            })
        }
       const respuesta = await guardarPassword(password)
       setAlerta(respuesta)
    }
    const {msg} = alerta
    return (
        <>
            <AdminNav />

            <h2 className=" font-black text-3xl text-center mt-10  text-white">Cambiar Password</h2>
            <p className=" text-xl text-white my-5 mb-10 text-center font-bold">Modifica tu {''}  
            <span className="text-rose-600 font-bold">Password aquí</span>  </p>


            <div className="flex justify-center">
                <div className="w-full md:w-1/2 bg-white shadow-xl rounded-xl p-5">

                    
                    {msg && <Alerta alerta={alerta} />}
                    <form
                        onSubmit={handleSubmit}
                    >
                        <div  className="my-3">
                          <img src={Logo3} alt="Logo" className="h-16 sm:h-24 w-auto mr-2" />

                            <label className="uppercase font-bold text-gray-600">Password Actual</label>
                            <input
                                type="password"
                                className="border bg-gray-300 w-full p-2 mt-5 rounded-xl cursor-pointer"
                                name="pwd_actual"
                                placeholder="Escribe tu password actual"
                                onChange={e => setPassword({
                                    ...password,
                                    [e.target.name] : e.target.value
                                })}

                              
                            />

                        </div>
                        <div  className="my-3">

                            <label className="uppercase font-bold text-gray-600">Nuevo Password</label>
                            <input
                                type="password"
                                className="border bg-gray-300 w-full p-2 mt-5 rounded-xl cursor-pointer"
                                name="pwd_nuevo"
                                placeholder="Escribe tu nuevo password"
                                onChange={e => setPassword({
                                    ...password,
                                    [e.target.name] : e.target.value
                                })}
                              
                            />

                        </div>
                        
                        

                        <input 
                            type="submit"
                            value={'Actualizar PassWord'}
                            className="bg-indigo-700 px-10 py-3 font-bold text-white rounded-xl uppercase w-full mt-5 cursor-pointer hover:bg-indigo-600"

                        />
                    </form>
                </div>
            </div>

        </>
    )
}


export default CambiarPassword