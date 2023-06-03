import { useContext } from "react";
import EmpresasContex from "../context/EmpresasProvider";

const useEmpresas = () => {
    return useContext(EmpresasContex)
}

export default useEmpresas