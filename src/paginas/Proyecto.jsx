//use params para leer parametros de la url
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useProyectos from "../hooks/useProyectos";
import useAdmin from "../hooks/useAdmin";
import Alerta from "../components/Alerta";
import ModalFormularioTarea from "../components/ModalFormularioTarea";
import ModalProyectos from "../components/ModalProyecto";
import ModalEliminarTarea from "../components/ModalEliminarTarea";
import ModalEliminarColaborador from "../components/ModalEliminarColaborador";
import Tarea from "../components/Tarea";
import Colaborador from "../components/Colaborador";
const Proyecto = () => {
  const params = useParams();
  const [alerta2, setAlerta2] = useState({});
  const admin = useAdmin();
  //console.log(params);
  const {
    obtenerProyecto,
    proyecto,
    cargando,
    eliminarProyecto,
    handleModalTarea,
    handleModalProyecto,
    alerta,
  } = useProyectos();

  const [modal2, setModal2] = useState(false);

  useEffect(() => {
    obtenerProyecto(params.id);
  }, []);

  //console.log(proyecto);

  const handleClick = () => {
    if (confirm("¿Quieres eliminar este proyecto?")) {
      eliminarProyecto(params.id);
      setAlerta2({
        msg: "Eliminado Correctamente",
        error: false,
      });
    }
  };

  //console.log(proyecto);
  const { nombre } = proyecto;
  const { msg } = alerta;
  const { msg2 } = alerta2;
  return cargando ? (
    "..."
  ) : (
    <>
      <div className="flex justify-between">
        <h1 className="font-black text-4xl text-indigo-800"> {nombre} </h1>
        <div className="flex items-center gap-3">
          {admin && (
            <div className="flex items-center gap-2 text-indigo-400 hover:text-black ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              <Link
                className="uppercase font-bold text-lg"
                to={`/proyectos/editar/${params.id}`}
              >
                Editar
              </Link>
            </div>
          )}
          {admin && (
            <div className="flex items-center gap-2 text-red-400 hover:text-red-900 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>

              <button className="uppercase font-bold" onClick={handleClick}>
                Eliminar
              </button>
            </div>
          )}
        </div>
      </div>

      {msg2 && <Alerta alerta2={alerta2} />}
      <div className="flex gap-2">
        {admin && (
          <button
            onClick={handleModalTarea}
            type="button"
            className="text-sm px-5 py-3 w-full md:w-auto rounded-lg uppercase font-bold bg-indigo-400 text-white text-center mt-5 flex gap-2 items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Nueva Tarea
          </button>
        )}

        <ModalFormularioTarea />
        <ModalEliminarTarea />
        <button
          onClick={handleModalProyecto}
          type="button"
          className="text-sm px-5 py-3 w-full md:w-auto rounded-lg uppercase font-bold bg-indigo-400 text-white text-center mt-5 flex gap-2 items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
            />
          </svg>
          Detalles Proyecto
        </button>
        <ModalProyectos modal={modal2} setModal={setModal2} />
      </div>
      <p className="font-bold text-2xl mt-10">Tareas del Proyecto</p>
      <div className="flex justify-center ">
        <div className="md:w-2/3 lg:w-3/4">
          {msg && <Alerta alerta={alerta} />}
        </div>
      </div>

      <div className="bg-white shadow mt-10 rounded-lg ">
        {proyecto.tareas?.length ? (
          proyecto.tareas?.map((tarea) => (
            <Tarea key={tarea._id} tarea={tarea} />
          ))
        ) : (
          <p className="text-center my-5 p-10 ">
            Este Proyecto Aún No Tiene Tareas{" "}
          </p>
        )}
      </div>
      {admin && (
        <>
          <div className="flex items-center justify-between mt-10 ">
            <p className=" font-bold text-2xl">Colaboradores</p>
            <Link
              to={`/proyectos/nuevo-colaborador/${proyecto._id}`}
              className="text-gray-500 uppercase font-bold hover:text-black "
            >
              añadir
            </Link>
          </div>
          <div className="bg-white shadow mt-10 rounded-lg">
            {proyecto.colaboradores?.length ? (
              proyecto.colaboradores?.map((colaborador) => (
                <Colaborador key={colaborador._id} colaborador={colaborador} />
              ))
            ) : (
              <p className="text-center my-5 p-10">
                No hay Colaboradores en este proyecto
              </p>
            )}
          </div>
        </>
      )}

      <ModalEliminarColaborador />
    </>
  );
};

export default Proyecto;
