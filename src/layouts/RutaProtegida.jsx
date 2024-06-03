/*import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const RutaProtegida = () => {
  const { auth, cargando } = useAuth();
  if (cargando) return "Cargando";
  return (
    <>
      {auth._id ? (
        <div className="bg-gray-100">
          <Header />
          <div className="md:flex md:min-h-screen">
            <Sidebar />
            <main className="flex-1  p-10">
              <Outlet />
            </main>
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default RutaProtegida;*/

import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import Header from "../components/Header";
import Sidebar, { SidebarItem } from "../components/Sidebar";
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
} from "lucide-react";

const RutaProtegida = () => {
  const { auth, cargando } = useAuth();
  if (cargando) return "Cargando";
  return (
    <>
      {auth._id ? (
        <div className="bg-gray-100">
          <Header />
          <div className="md:flex md:min-h-screen">
            <Sidebar>
              <SidebarItem
                icon={<Boxes size={20} />}
                text="Proyectos"
                to="/proyectos"
                active
              />
              <SidebarItem
                icon={<LayoutDashboard size={20} />}
                text="Crear Proyectos"
                to="/proyectos/crear-proyecto"
              />
              <SidebarItem
                icon={<BarChart3 size={20} />}
                text="Estadisticas"
                to="/proyectos/estadisticas"
              />
              <SidebarItem
                icon={<UserCircle size={20} />}
                text="Usuarios"
                to="/perfil-usuarios" // Pasa la ruta directamente como un string
              />
              {/*
              <SidebarItem icon={<Boxes size={20} />} text="Inventario" />
              <SidebarItem icon={<Package size={20} />} text="Ordenes" alert />
      a*/}
              <hr className="my-3" />
              <SidebarItem icon={<Settings size={20} />} text="config" alert />
              <SidebarItem
                icon={<LifeBuoy size={20} />}
                text="Contactos"
                alert
              />
            </Sidebar>
            <main className="flex-1  p-10">
              <Outlet />
            </main>
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default RutaProtegida;
