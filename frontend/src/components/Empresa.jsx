import useEmpresas from "../hooks/useEmpresas"

const Empresa = ({empresa}) => {
    const {setEdicion, eliminarEmpresa} = useEmpresas()
    
    const {direccion, email, logotipo, nombre, paginaWeb, redesSociales, telefono, _id} = empresa

  return (
    <div className="mx-5 my-10 bg-white shadow-xl px-5 py-10 rounded-xl">
      <p className="font-bold upercase text-indigo-800 my-2">Nombre: {''}
        <span className="font-normal normal-case text-black">{nombre}</span>
      </p>
      <p className="font-bold upercase text-indigo-800 my-2">Dirección: {''}
        <span className="font-normal normal-case text-black">{direccion}</span>
      </p>
      <p className="font-bold upercase text-indigo-800 my-2">Email: {''}
        <span className="font-normal normal-case text-black">{email}</span>
      </p>
      <p className="font-bold upercase text-indigo-800 my-2">Teléfono: {''}
        <span className="font-normal normal-case text-black">{telefono}</span>
      </p>
      <p className="font-bold upercase text-indigo-800 my-2">Redes Sociales: {''}
        <span className="font-normal normal-case text-black">{redesSociales}</span>
      </p>
      <p className="font-bold upercase text-indigo-800 my-2">Página Web: {''}
        <span className="font-normal normal-case text-black">{paginaWeb}</span>
      </p>
      <p className="font-bold upercase text-indigo-800 my-2">Logtipo: {''}
        <span className="font-normal normal-case text-black">{logotipo}</span>
      </p>
      <p className="font-bold upercase text-indigo-800 my-2">ID: {''}
        <span className="font-normal normal-case text-black">{_id}</span>
      </p>

      <div className="flex justify-between my-5">
        <button
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white upercase font-bold rounded-xl"
            onClick={() => setEdicion(empresa)}
        >Editar</button>
        
        <button
            type="button"
            className="py-2 px-10 bg-red-700 hover:bg-red-900 text-white upercase font-bold rounded-xl"
            onClick={() => eliminarEmpresa(_id)}
        >Eliminar</button>

      </div>
    </div>
  )
}

export default Empresa
