import useProyectos from "../hooks/useProyectos";
import PreviewProyecto from "../components/PreviewProyecto";

const Proyectos = () => {
  const { proyectos } = useProyectos();
  //console.log(proyectos);
  //creando comentario
  return (
    <>
      <h1 className=" text-3xl font-bold text-indigo-500  uppercase text-center ">
        Proyectos
      </h1>
      <div className="bg-white shadow mt-10 rounded-lg ">
        {proyectos.length ? (
          proyectos.map((proyecto) => (
            <PreviewProyecto key={proyectos._id} proyecto={proyecto} />
          ))
        ) : (
          <p className="text-center text-gray-600 uppercase p-5 ">
            No hay proyectos
          </p>
        )}
      </div>
    </>
  );
};

export default Proyectos;
