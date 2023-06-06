import { useState, useEffect } from "react";
import Alerta from "./Alerta";
import useEmpresas from "../hooks/useEmpresas";
import Logo3 from "../img/Logo CDN SECUNDARIO Color.jpg";


const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [redesSociales, setRedesSociales] = useState("");
  const [paginaWeb, setPaginaWeb] = useState("");
  const [logotipo, setLogotipo] = useState("");
  const [id, setId] = useState(null);

  const [alerta, setAlerta] = useState({});

  const { guardarEmpresa, empresa } = useEmpresas();

  useEffect(() => {
    if (empresa?.nombre) {
      setNombre(empresa.nombre);
      setDireccion(empresa.direccion);
      setEmail(empresa.email);
      setTelefono(empresa.telefono);
      setRedesSociales(empresa.redesSociales);
      setPaginaWeb(empresa.paginaWeb);
      setLogotipo(empresa.logotipo);
      setId(empresa._id);
    }
  }, [empresa]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar Formulario
    if (
      [
        nombre,
        direccion,
        email,
        telefono,
        redesSociales,
        paginaWeb,
        logotipo,
      ].includes("")
    ) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    guardarEmpresa({
      nombre,
      direccion,
      email,
      telefono,
      redesSociales,
      paginaWeb,
      logotipo,
      id,
    });
    setAlerta({
      msg: "Guardado Correctamente",
    });
    setNombre("");
    setDireccion("");
    setEmail("");
    setTelefono("");
    setRedesSociales("");
    setPaginaWeb("");
    setLogotipo("");
    setId("");
  };

  const { msg } = alerta;

  return (
    <>
      <h2 className="font-extrabold text-3xl text-center text-white">
        {" "}
        Administrador de Empresas
      </h2>
      <p className="text-xl mt-5 mb-10 px-5 py-5 text-center text-white">
        Añade tus Empresas y {""}
        <span className="text-black font-bold">Administralas </span>
      </p>
     
        <form
          className="bg-white py-10 px-5 mb-10 lg:mb-5 shadow-xl rounded-xl"
          onSubmit={handleSubmit} 
         
        >
          <div className="mb-5">
          <img src={Logo3} alt="Logo" className="h-16 sm:h-24 w-auto mr-2" />

            <label
              htmlFor="nombre"
              className="text-gray-700 uppercase font-bold"
            >
              Nombre de la Empresa
            </label>
            <input
              id="nombre"
              type="text"
              placeholder="Nombre de la Empresa"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-xl cursor-pointer"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="direccion"
              className="text-gray-700 uppercase font-bold"
            >
              {" "}
              Dirección
            </label>
            <input
              id="direccion"
              type="text"
              placeholder="Direccion de la Empresa"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-xl cursor-pointer"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="text-gray-700 uppercase font-bold"
            >
              Email{" "}
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email de la Empresa"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-xl cursor-pointer"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="telefono"
              className="text-gray-700 uppercase font-bold"
            >
              Teléfono{" "}
            </label>
            <input
              id="telefono"
              type="tel"
              placeholder="Teléfono de la Empresa"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-xl cursor-pointer"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="redesSociales"
              className="text-gray-700 uppercase font-bold"
            >
              Redes Sociales
            </label>
            <input
              id="redesSociales"
              type="text"
              placeholder="Redes Sociales"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-xl cursor-pointer"
              value={redesSociales}
              onChange={(e) => setRedesSociales(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="paginaWeb"
              className="text-gray-700 uppercase font-bold"
            >
              Página Web
            </label>
            <input
              id="paginaWeb"
              type="text"
              placeholder="Pagina Web"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-xl cursor-pointer"
              value={paginaWeb}
              onChange={(e) => setPaginaWeb(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="logotipo"
              className="text-gray-700 uppercase font-bold"
            >
              Logotipo
            </label>
            <input
              id="logotipo"
              type="text"
              placeholder="Logotipo"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-xl cursor-pointer"
              value={logotipo}
              onChange={(e) => setLogotipo(e.target.value)}
            />
          </div>
          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-xl"
            value={id ? "Guardar Cambios " : "Agregar Empresa"}
          />
        </form>
        {msg && <Alerta alerta={alerta} />}
      
    </>
  );
};

export default Formulario;
