import { useState } from "react";

import { Link } from "react-router-dom";

import Alerta from "../components/Alerta";
import clienteAxios from "../config/clienteAxios";

const Registrar = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([nombre, email, password, repetirPassword].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }
    if (password !== repetirPassword) {
      setAlerta({
        msg: "Los password no son iguales",
        error: true,
      });
      return;
    }
    if (password.length < 8) {
      setAlerta({
        msg: "password muy corto. minimo 8 caracteres",
        error: true,
      });
      return;
    }
    setAlerta({});

    //crear el usuario en la api
    try {
      const { data } = await clienteAxios.post(`/usuarios`, {
        nombre,
        email,
        password,
      });

      setAlerta({
        msg: data.msg,
        error: false,
      });
      //si pasa reiniciar formulario
      setNombre("");
      setEmail("");
      setPassword("");
      setRepetirPassword("");
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };
  //extraer mensaje de la alerta en caso de que exista
  const { msg } = alerta;

  return (
    <>
      <h1 className="text-violet-700 font-black text-6xl capitalize">
        GestorLab <span className="text-black">Crea</span> Tu
        <span className="text-black">Cuenta</span>
      </h1>

      <form
        className="my-10 bg-white shadow rounded-lg p-10"
        onSubmit={handleSubmit}
      >
        {msg && <Alerta alerta={alerta} />}
        <div className="my-5">
          <label
            className=" uppercase text-gray-600 block text-xl font-bold "
            htmlFor="nombre"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Ingresa tu nombre"
            className="w-full mt-3 p-3 border rounded-xl bg-violet-50"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label
            className=" uppercase text-gray-600 block text-xl font-bold "
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de registro"
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
        <div className="my-5">
          <label
            className=" uppercase text-gray-600 block text-xl font-bold "
            htmlFor="password2"
          >
            Repetir Password
          </label>
          <input
            id="password2"
            type="password"
            placeholder="Repetir tu password"
            className="w-full mt-3 p-3 border rounded-xl bg-violet-50"
            value={repetirPassword}
            onChange={(e) => setRepetirPassword(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Crear Cuenta"
          className="bg-violet-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-violet-800 transition-colors"
        />
      </form>

      <nav className="lg:flex lg:justify-between ">
        <Link
          className="block text-center my-5 text-gray-500 uppercase text-sm hover:text-violet-500"
          to="/"
        >
          ¿Tienes una cuenta? Inicia Sesión
        </Link>
        <Link
          className="block text-center my-5 text-gray-500 uppercase text-sm hover:text-violet-500"
          to="/olvide-password"
        >
          Olvide mi contraseña
        </Link>
      </nav>
    </>
  );
};

export default Registrar;
