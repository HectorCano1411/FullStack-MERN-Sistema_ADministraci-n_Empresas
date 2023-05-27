// rafce
import { Link } from "react-router-dom"

// import (Link) from "react-router-dom"


const Login = () => {
  return (
   <>
  
        <div>
            <h1 className="text-indigo-600 font-black text-6xl"  > 
            Inicia Sesión y Administra {''} tus 
            <span className="text-black"> Empresas</span>
            </h1>
        </div>
        <div className="mt-20  md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
            <form>
                <div className="my-5">
                    <label className="uppercase text-gray-600 block text-xl font-bold">
                        Email   
                    </label>
                    <input type='email'
                     placeholder= 'ingrese su email'
                     className="border w-full p-3 mt-3 bg-gray-200 rounded-xl"
                     />
                </div>
                <div className="my-5">
                    <label className="uppercase text-gray-600 block text-xl font-bold">
                        Password   
                    </label>
                    <input type='password'
                     placeholder= 'ingrese su password'
                     className="border w-full p-3 mt-3 bg-gray-200 rounded-xl"
                     />
                </div>
                <input 
                type="submit"
                value='Iniciar Sesion'
                className="bg-indigo-600 w-full py-3 px-10  rounded-xl
                 text-white uppercase font-bold mt-5
                hover:cursor-pointer md:w-auto
                hover:bg-indigo-900 "
                 />
            </form>
            <nav className="mt-10 lg:flex lg:justify-between">
                <Link  
                className="block text-center my-5 text-gray500 border w-full p-3 mt-3 rounded-xl bg-indigo-300 hover:bg-slate-400"
                to= '/registrar'>¿No tienes una cuenta? Regístrate </Link>
                <Link
                className="block text-center my-5 text-gray500 border w-full p-3 mt-3 rounded-xl bg-indigo-300 hover:bg-slate-400" 
                to= '/olvide-password'>Olvide mi Password </Link>
            </nav>
        </div>

   </>
  )
}

export default Login
