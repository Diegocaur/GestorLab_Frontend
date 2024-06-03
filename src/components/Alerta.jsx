const Alerta = ({ alerta }) => {
  return (
    <div
      className={`${
        alerta.error
          ? "from-violet-400 to-violet-600"
          : "from-lime-400 to-sky-600"
      } bg-gradient-to-br text-center p-3 rounded-xl uppercase text-white font-bold text-sm my-10 `}
    >
      {alerta.msg}
    </div>
  );
};

export default Alerta;
