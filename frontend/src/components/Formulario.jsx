import { useState } from "react";
import Alerta from './Alerta'

const Formulario = () => {
    const [nombre , setNombre] = useState('')
    const [direccion , setDireccion] = useState('')
    const [email , setEmail] = useState('')
    const [telefono , setTelefono] = useState('')
    const [redesSociales , setRedesSociales] = useState('')
    const [paginaWeb , setPaginaWeb] = useState('')
    const [logotipo , setLogotipo] = useState('')

    const [alerta, setAlerta] = useState({})

    const handleSubmit = e  => {
        e.preventDefault()

        // Validar Formulario
        if([nombre, direccion, email, telefono, redesSociales. paginaWeb, logotipo].includes('')){
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }
    }

    const {msg} = alerta

  return (
    <>
        <p className="text-lg text-center mb-10">
            Añade las empresas y {''}
            <span className="text-indigo-600 font-bold">Administralas</span>
        </p>


        <form className="bg-white py-10 px-5 mb-10 lg:mb-5 shadow-xl rounded-xl"
            onSubmit={handleSubmit}
        >
            <div className="mb-5">
                <label 
                htmlFor="nombre"
                className="text-gray-700 uppercase font-bold"
                >Nombre de la Empresa</label>
                <input 
                    id="nombre"
                    type="text"
                    placeholder="Nombre de la Empresa"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-xl cursor-pointer"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label 
                htmlFor="direccion"
                className="text-gray-700 uppercase font-bold"
                > Dirección</label>
                <input 
                    id="direccion"
                    type="text"
                    placeholder="Direccion de la Empresa"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-xl cursor-pointer"
                    value={direccion}
                    onChange={e => setDireccion(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label 
                htmlFor="email"
                className="text-gray-700 uppercase font-bold"
                >Email </label>
                <input 
                    id="email"
                    type="email"
                    placeholder="Email de la Empresa"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-xl cursor-pointer"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label 
                htmlFor="telefono"
                className="text-gray-700 uppercase font-bold"
                >Teléfono </label>
                <input 
                    id="telefono"
                    type="tel"
                    placeholder="Teléfono de la Empresa"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-xl cursor-pointer"
                    value={telefono}
                    onChange={e => setTelefono(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label 
                htmlFor="redesSociales"
                className="text-gray-700 uppercase font-bold"
                >Redes Sociales</label>
                <input 
                    id="redesSociales"
                    type="text"
                    placeholder="Redes Sociales"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-xl cursor-pointer"
                    value={redesSociales}
                    onChange={e => setRedesSociales(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label 
                htmlFor="paginaWeb"
                className="text-gray-700 uppercase font-bold"
                >Pagina Web</label>
                <input 
                    id="paginaWeb"
                    type="text"
                    placeholder="Pagina Web"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-xl cursor-pointer"
                    value={paginaWeb}
                    onChange={e => setPaginaWeb(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label 
                htmlFor="logotipo"
                className="text-gray-700 uppercase font-bold"
                >Logotipo</label>
                <input 
                    id="logotipo"
                    type="text"
                    placeholder="Logotipo"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-xl cursor-pointer"
                    value={logotipo}
                    onChange={e => setLogotipo(e.target.value)}
                />
            </div>
            <input 
                type="submit"
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-xl"          
            />
        </form>
        {msg && <Alerta alerta={alerta} />}

    </>
  ) ;
};

export default Formulario;
