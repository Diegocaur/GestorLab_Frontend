//para acceder a las funciones al state y a todo lo que se pondra disponible en el provider de proyecto

import { useContext } from "react";
import ProyectosContext from "../context/ProyectoProvider";

const useProyectos = () => {
  return useContext(ProyectosContext);
};

export default useProyectos;
