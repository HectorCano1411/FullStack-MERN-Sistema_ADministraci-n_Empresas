import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authlayout from "./layout/Authlayout";
import RutaProtegida from "./layout/RutaProtegida";
import Login from "./paginas/Login";
import Registrar from "./paginas/Registrar";
import OlvidePassword from "./paginas/OlvidePassword";
import ConfirmarCuenta from "./paginas/ConfirmarCuenta";
import NuevoPassword from "./paginas/NuevoPassword";
import AdministrarEmpresas from "./paginas/AdministrarEmpresas";

import { AuthProvider } from "./context/AuthProvider";
import { EmpresasProvider } from "./context/EmpresasProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <EmpresasProvider>
          <Routes>
            <Route path="/" element={<Authlayout />}>
              <Route index element={<Login />} />
              <Route path="registrar" element={<Registrar />} />
              <Route path="olvide-password" element={<OlvidePassword />} />
              <Route path="olvide-password/:token" element={<NuevoPassword />} />
              <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
            </Route>

            <Route  path="/admin" element={<RutaProtegida />}>
              <Route index element={<AdministrarEmpresas />} />
            </Route>
          </Routes>
        </EmpresasProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
