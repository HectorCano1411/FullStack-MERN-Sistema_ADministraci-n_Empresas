// rsfce
import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";
import Logo1 from "../img/logo_sercotec-uno.png";
import Logo3 from "../img/Logo CDN SECUNDARIO Color + letra blanca.png";

const OlvidePassword = () => {
  const [email, setEmail] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || email.length < 6) {
      setAlerta({ msg: "El Email es obligatorio ", error: true });
      return;
    }

    try {
      const { data } = await clienteAxios.post(
        "/administrador/olvide_password",
        { email }
      );

      setAlerta({ msg: data.msg });
      console.log(data);
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
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div
            className="absolute top-0 left-0 flex flex-wrap gap-2 sm:gap-4 ml-4 mt-4"
            style={{ backgroundColor: "#053861" }}
          >
            <img src={Logo1} alt="Logo" className="h-16 sm:h-24 w-auto mr-2 max-w-full" />
            <img src={Logo3} alt="Logo" className="h-16 sm:h-24 w-auto mr-2 max-w-full" />
          </div>
        </div>
        <div>
          <h1 className="text-white font-black text-6xl">
            Recupera tu acceso y no pierdas {""}
            <span className="text-black"> tus Empresas</span>
          </h1>
        </div>
      </div>

      <div className="mt-20  md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alerta alerta={alerta} />}
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Email
            </label>
            <input
              type="email"
              placeholder="ingrese su email"
              className="border w-full p-3 mt-3 bg-gray-200 rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Enviar Validación"
            className="bg-indigo-600 w-full py-3 px-10  rounded-xl
                        text-white uppercase font-bold mt-5
                        hover:cursor-pointer md:w-auto
                        hover:bg-indigo-900 "
          />
        </form>

        <nav className="mt-10 lg:flex lg:justify-between">
          <Link
            className="block text-center my-5 text-gray500 border w-full p-3 mt-3 rounded-xl bg-indigo-300 hover:bg-slate-400"
            to="/"
          >
            ¿Ya Tienes una cuenta? inicia Sesión
          </Link>
          <Link
            className="block text-center my-5 text-gray500 border w-full p-3 mt-3 rounded-xl bg-indigo-300 hover:bg-slate-400"
            to="/registrar"
          >
            ¿No tienes una cuenta? Regístrate{" "}
          </Link>
        </nav>
      </div>
    </>
  );
};

export default OlvidePassword;
