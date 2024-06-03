import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import Alerta from "../components/Alerta";

import clienteAxios from "../config/clienteAxios";

import useAuth from "../hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }
    try {
      const { data } = await clienteAxios.post("/usuarios/login", {
        email,
        password,
      });
      setAlerta({});
      localStorage.setItem("token", data.token);
      setAuth(data);
      navigate("/proyectos");
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alerta;

  return (
    <>
      <h1 className="text-violet-700 font-black text-6xl capitalize">
        Gestor<span className="text-black">Lab</span> Administración de
        <span className="text-black">Proyectos</span>
      </h1>

      <form
        className="my-10 bg-white shadow rounded-lg p-10"
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          {msg && <Alerta alerta={alerta} />}
          <label
            className=" uppercase text-gray-600 block text-xl font-bold "
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de Registro"
            className="w-full mt-3 p-3 border rounded-xl bg-violet-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label
            className=" uppercase text-gray-600 block text-xl font-bold "
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Ingresa tu contraseña"
            className="w-full mt-3 p-3 border rounded-xl bg-violet-50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Iniciar Sesión"
          className="bg-violet-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-violet-800 transition-colors"
        />
        <nav className="lg:flex lg:justify-between ">
          <Link
            className="block text-center my-5 text-black font-bold uppercase text-sm hover:text-violet-500"
            to="registrar"
          >
            ¿No Tienes Una Cuenta? Registrate Acá
          </Link>
          <Link
            className="block text-center my-5 text-black font-bold uppercase text-sm hover:text-violet-500"
            to="olvide-password"
          >
            Olvide mi contraseña
          </Link>
        </nav>
      </form>
    </>
  );
};

export default Login;
