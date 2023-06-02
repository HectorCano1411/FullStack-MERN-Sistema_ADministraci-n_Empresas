import { Outlet, Navigate  } from "react-router-dom";
import useAuth from '../hooks/useAuth';
import Header from "../components/Header";
import Footer from "../components/Footer";


const RutaProtegida = () => {

  const { auth, cargando } = useAuth()

  console.log(auth)
  console.log(cargando)
  if(cargando) return 'cargando...'

  return(
  <>
      <Header />
      {auth?.email ? (
        <main className="container mx-auto mt-10">
             <Outlet /> 
        </main>
      ): <Navigate to="/" />}
      <Footer />  
  </>

) 
}

export default RutaProtegida;




// const RutaProtegida = () => {
//   const { auth, cargando } = useAuth();
//   const navigate = useNavigate();

//   if (cargando) return 'Cargando...';

//   if (auth?._id) {
//     return (
//       <>
//           <Header />
//               <Outlet />
//           <Footer />
//       </>
//     );
//   } else {
//     navigate('/');
//     return null;
//   }
// };

// export default RutaProtegida;






// const RutaProtegida = () => {
//   const { auth, cargando } = useAuth();
//   const navigate = useNavigate();

//   if (cargando) return 'cargando...';

//   if (auth?._id) {
//       return (
//           <>
//               <h1>Esta es una Ruta Protegida</h1>
//               {/* Renderizar el contenido protegido */}
//               <Outlet />
//           </>
//       );
//   } else {
//       // Redirigir al usuario a la ruta "/admin" si el usuario existe
//       // o redirigir al navegador si el usuario no existe
//       navigate(auth ? "/admin" : "/");
//       return null; // Puedes mostrar un mensaje de carga mientras se redirige
//   }
// };

// export default RutaProtegida;
















// import { Outlet, Navigate } from "react-router-dom";
// import  useAuth  from '../hooks/useAuth';
// import Header from "../components/Header";
// import Footer from "../components/Footer";



