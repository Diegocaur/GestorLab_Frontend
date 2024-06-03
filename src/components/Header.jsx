import { Link } from "react-router-dom";
import useProyectos from "../hooks/useProyectos";
import useAuth from "../hooks/useAuth";
import Busqueda from "./Busqueda";

const Header = () => {
  const { handleBuscador } = useProyectos();
  const { cerrarSesion } = useProyectos();
  const { cerrarSesionAuth } = useAuth();

  const hadnleCerrarSesion = () => {
    cerrarSesionAuth();
    cerrarSesion();
    localStorage.removeItem("token");
  };
  return (
    <header className="px-4 py-5 bg-white border-b">
      <div className="md:flex md:justify-between">
        <h2 className="text-4xl text-violet-600 font-black text-center mb-5 md:mb-0">
          GestorLab
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-3">
          <button
            type="button"
            className="font-bold uppercase"
            onClick={handleBuscador}
          >
            Buscar Proyecto
          </button>
          <Link to="/proyectos" className="font-bold uppercase">
            Proyectos
          </Link>

          <button
            type="button"
            //className="text-white text-sm bg-violet-500 p-3 rounded-md uppercase font-bold"
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={hadnleCerrarSesion}
          >
            {" "}
            Cerrar Sesión
          </button>
          <Busqueda />
        </div>
      </div>
    </header>
  );
};

export default Header;
