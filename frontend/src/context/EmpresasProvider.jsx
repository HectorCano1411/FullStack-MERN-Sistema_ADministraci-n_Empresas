import { createContext, useState, useEffect } from "react";
import clienteAxios from "../config/axios";
import useAuth from "../hooks/useAuth";

const EmpresasContext = createContext();

export const EmpresasProvider = ({ children }) => {
  const [empresas, setEmpresas] = useState([]);
  const [empresa, setEmpresa] = useState({});
  const {auth} = useAuth()

  useEffect(() => {
    const obtenerEmpresas = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await clienteAxios("/empresas", config);
        setEmpresas(data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerEmpresas();
  }, [auth]);

  const guardarEmpresa = async (empresa) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    if (empresa.id) {
      try {
        const { data } = await clienteAxios.put(
          `/empresas/${empresa.id}`,
          empresa,
          config
        );
        const empresaActualizada = empresas.map((empresaState) =>
          empresaState._id === data._id ? data : empresaState
        );
        setEmpresas(empresaActualizada);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const { data } = await clienteAxios.post("/empresas", empresa, config);
        // eslint-disable-next-line no-unused-vars
        const { createdAt, updatedAt, __v, ...empresaAlmacenada } = data;
        setEmpresas([empresaAlmacenada, ...empresas]);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    }
  };

  const setEdicion = (empresa) => {
    setEmpresa(empresa);
  };

  const eliminarEmpresa = async id => {
    const confirmar = confirm('¿Estas seguro que deseas Eliminar la Empresa ')
    if(confirmar){
        try {
            const token = localStorage.getItem("token");
            const config = {
            headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
      },
    };
        const {data} = await clienteAxios.delete(`/empresas/${id}`,config)
       
        const empresaActualizada = empresas.filter(empresaState => empresaState._id !== id)
        setEmpresas(empresaActualizada)
        } catch (error) {
            console.log(error)
        }
    }
    
  }

  return (
    <EmpresasContext.Provider
      value={{
        empresas,
        guardarEmpresa,
        setEdicion,
        empresa,
        eliminarEmpresa
      }}
    >
      {children}
    </EmpresasContext.Provider>
  );
};

export default EmpresasContext;
