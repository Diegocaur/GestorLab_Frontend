import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";
import Alerta from "../components/Alerta";

//a
const ConfirmarCuenta = () => {
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const [alerta, setAlerta] = useState({});

  const params = useParams();
  const { id } = params;
  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `/usuarios/confirmar/${id}`;
        const { data } = await clienteAxios(url);
        setAlerta({
          msg: data.msg,
          error: false,
        });
        setCuentaConfirmada(true);
      } catch (error) {
        // Esperar 5 segundos antes de ejecutar el setAlerta
        setTimeout(() => {
          setAlerta({
            msg: error.response.data.msg,
            error: true,
          });
        }, 5000); // 5000 milisegundos = 5 segundos
      }
    };
    confirmarCuenta();
  }, []);

  const { msg } = alerta;

  return (
    <>
      <h1 className="text-violet-700 font-black text-6xl capitalize">
        Confirma <span className="text-black">Tu</span> Cuen
        <span className="text-black">ta</span>
      </h1>

      <div>
        {msg && <Alerta alerta={alerta} />}

        {cuentaConfirmada && (
          <Link
            className="block text-center my-5 text-slate-500 uppercase text-sm"
            to="/"
          >
            Inicia Sesión
          </Link>
        )}
      </div>
    </>
  );
};

export default ConfirmarCuenta;
