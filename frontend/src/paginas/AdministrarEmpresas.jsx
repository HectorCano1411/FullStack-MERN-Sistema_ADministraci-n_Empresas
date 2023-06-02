import { useState } from "react";
import Formulario from "../components/Formulario";
import ListadoEmpresas from "../components/ListadoEmpresas";




const AdministrarEmpresas = () => {

  const [mostrarFormulario, setMostrarFormulario] = useState(false)

  return (
      
      <div className="flex flex-col md:flex-row">
        <button
        type="button"
        className="bg-indigo-600 text-white font-bold upercase mx-10 p-3 rounded-xl mb-10 md:hidden"
        onClick={() => setMostrarFormulario(!mostrarFormulario) }
        >{mostrarFormulario  ? 'Ocultar Formulario ' : 'Mostrar Formulario'}</button>
        <div className= {`${mostrarFormulario ? 'block' : 'hidden'} md:block md:w-1/2 lg:w-2/5`}>
          <Formulario />
        </div>
          
        <div className="md:w-1/2 lg:w-3/5">
        <ListadoEmpresas />
        </div>

      </div>
  );
};

export default AdministrarEmpresas;
