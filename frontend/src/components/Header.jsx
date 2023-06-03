import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Logo1 from "../img/logo_sercotec-uno.png";
// import Logo2 from "../img/Logo CDN PRIMARIO Color + letra blanca.png";
import Logo3 from "../img/Logo CDN SECUNDARIO Color + letra blanca.png";
// import Logo4 from "../img/Logo CDN SECUNDARIO Negro.jpg";
// import Logo5 from "../img/Logo CDN PRIMARIO NEGRO.jpg";

const Header = () => {
  const { cerrarSesion } = useAuth();
  return (
    <header className="py-5 lg:py-10" style={{ backgroundColor: "#053861" }}>
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-wrap gap-2 sm:gap-4">
          <img src={Logo1} alt="Logo" className="h-16 sm:h-24 w-auto mr-2" />
          {/* <img src={Logo2} alt="Logo" className="h-16 sm:h-24 w-auto mr-2" /> */}
          <img src={Logo3} alt="Logo" className="h-16 sm:h-24 w-auto mr-2" />
          {/* <img src={Logo4} alt="Logo" className="h-16 sm:h-24 w-auto mr-2" /> */}
          {/* <img src={Logo5} alt="Logo" className="h-16 sm:h-24 w-auto mr-2" /> */}
        </div>

        <h1 className="font-bold text-lg lg:text-2xl text-indigo-200 mb-4 lg:mb-0">
          Sistema Administrador de{" "}
          <span className="text-white font-black">Empresas</span>
        </h1>

        <div className="flex lg:gap-4 items-center ">
          <nav className="lg:flex gap-2">
            <Link
              to="/admin"
              className="text-white text-sm uppercase font-bold px-3 py-2"
            >
              Empresas
            </Link>
            <Link
              to="/perfil"
              className="text-white text-sm uppercase font-bold px-3 py-2"
            >
              Perfil
            </Link>
          </nav>

          <button
            type="button"
            className="text-white text-sm uppercase font-bold px-3 py-2"
            onClick={cerrarSesion}
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
