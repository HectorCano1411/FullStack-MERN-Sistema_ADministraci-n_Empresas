import { useContext } from "react";
import AuthContex from "../context/AuthProvider";

const useAuth = () => {
    return useContext(AuthContex)
}

export default useAuth