//Outlet va a inyectar el contenido de los componentes hijos que se hayan definido en el router
import { Outlet } from "react-router-dom";

//contenido de paginas dentro del main
const AuthLayout = () => {
  return (
    <>
      <main className="container mx-auto mt-5 pd-5 md:flex md:justify-center ">
        <div className=" md:w-2/3 lg:w-2/5 ">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default AuthLayout;
