import useEmpresas from "../hooks/useEmpresas";
import Empresa from "./Empresa";

const ListadoEmpresas = () => {
  const { empresas } = useEmpresas();

  return (
    <>
      {empresas.length ? 
      (
        <>
          <h2 className="font-black text-3xl text-center ">
            {" "}
            Listado de Empresas
          </h2>

          <p className="text-xl mt-5 mb-10 px-5 py-5 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Empresas </span>
          </p>
          {empresas.map(empresa => (
            <Empresa 
                key={empresa._id}
                empresa={empresa}
            />
          ))}
          
        </>
      ) : 
      (
        <>
          <h2 className="font-black text-3xl text-center "> No hay Empresas</h2>

          <p className="text-xl mt-5 mb-10 px-5 py-5 text-center">
            Comienza agregando Empresas {""}
            <span className="text-indigo-600 font-bold">
              y aparecerán en este lugar{" "}
            </span>
          </p>

            
        </>
      )}
    </>
  );
};

export default ListadoEmpresas;
