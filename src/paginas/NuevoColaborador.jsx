import FormularioColaborador from "./FormularioColaborador";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useProyectos from "../hooks/useProyectos";
import Alerta from "../components/Alerta";

const NuevoColaborador = () => {
  const {
    obtenerProyecto,
    proyecto,
    cargando,
    colaborador,
    agregarColaborador,
    alerta,
  } = useProyectos();
  const params = useParams();
  useEffect(() => {
    obtenerProyecto(params.id);
  }, []);

  //console.log(colaborador);

  //if (cargando) return "cargando..";

  if (!proyecto?._id) return <Alerta alerta={alerta} />;

  return (
    <>
      <h1 className="flex justify-left text-4xl text-indigo-800 font-black ">
        Añadir Colaborador(a) al Proyecto :
        <p className="text-black">{proyecto.nombre}</p>
      </h1>
      <div className="mt-10  flex justify-center">
        <FormularioColaborador />
      </div>
      {cargando ? (
        <p className="text-center">cargando...</p>
      ) : (
        colaborador?._id && (
          <div className="flex justify-center mt-10">
            <div className="bg-white py-10 px-5 md:w-1/2 rounded-lg shadow w-full">
              <h2 className="text-center mb-10 text-2xl font-bold">
                Resultado:
              </h2>

              <div className="flex justify-between items-center">
                <p className="font-bold text-2xl ">{colaborador.nombre}</p>
                <button
                  type="button"
                  className="bg-lime-500 hover:bg-lime-700 px-5 py-2 rounded-lg uppercase text-white font-bold text-sm"
                  onClick={() =>
                    agregarColaborador({
                      email: colaborador.email,
                    })
                  }
                >
                  Agregar al Proyecto
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default NuevoColaborador;
