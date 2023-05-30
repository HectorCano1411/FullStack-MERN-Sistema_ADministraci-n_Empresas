import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";

const NuevoPassword = () => {
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});
  const [tokenValido, setTokenValido] = useState(false);
  const [passwordModificado, setPasswordModificado] = useState(false)

  const params = useParams();
  const { token } = params;
  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios(`/administrador/olvide_password/${token}`);
        setAlerta({
          msg: "Coloca tu Nuevo Password",
        });
        setTokenValido(true);
      } catch (error) {
        setAlerta({
          msg: "Hubo un error en el enlace",
          error: true,
        });
      }
    };
    comprobarToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password < 6) {
      setAlerta({
        msg: "El Password debe ser mínimo de 6 caracteres",
        error: true,
      });
      return;
    }

    try {
      const url = `/administrador/olvide_password/${token}`;
      const { data } = await clienteAxios.post(url, { password });
      setAlerta({
        msg: data.msg,
      });
      setPasswordModificado(true)
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alerta;
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">
          Reestablece tu Password y no Pierdas Acceso a {""}
          <span className="text-black">Tus Empresas</span>
        </h1>
      </div>
      <div className="mt-20  md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alerta alerta={alerta} />}

        {tokenValido && (
          <>
            <form onSubmit={handleSubmit}>
              <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">
                  Nuevo Password
                </label>
                <input
                  type="password"
                  placeholder="ingrese su nuevo password"
                  className="border w-full p-3 mt-3 bg-gray-200 rounded-xl"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <input
                type="submit"
                value="Guardar Nuevo Password"
                className="bg-indigo-600 w-full py-3 px-10  rounded-xl
                  text-white uppercase font-bold mt-5
                  hover:cursor-pointer md:w-auto
                  hover:bg-indigo-900 "
              />
            </form>
            
          </>
        )}
        {passwordModificado && 
          <Link
          className="block text-center my-5 text-gray500 border w-full p-3 mt-3 rounded-xl bg-indigo-300 hover:bg-slate-400"
          to="/">
           Iniciar Sesión
        </Link>
        }
      </div>
    </>
  );
};

export default NuevoPassword;
