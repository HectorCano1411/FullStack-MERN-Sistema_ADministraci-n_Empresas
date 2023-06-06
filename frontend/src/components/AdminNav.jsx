import { Link } from "react-router-dom";

const AdminNav = () => {
    return (
        <nav className="flex gap-3">
            <Link
                to='/admin/perfil'
                className="font-bold upercase text-white"
            >Perfil</Link>
            <Link
                to='/admin/cambiar_password'
                className="font-bold upercase text-white"
            >Cambiar Password</Link>

        </nav>
    )
}


export default AdminNav