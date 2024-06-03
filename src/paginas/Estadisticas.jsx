import {
  LabelList,
  Cell,
  PieChart,
  Pie,
  Legend,
  Tooltip,
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Estadisticas = () => {
  const array = [
    {
      name: "Proyectos Totales",
      completados: 6,
      incompletos: 1,
    },
    {
      name: "Tareas",
      totales: 66,
      completados: 50,
      incompletos: 16,
    },
    {
      name: "colaboradores",
      colaboradores: 6,
    },
  ];
  const array2 = [
    {
      name: "Proyectos Totales",
      completados: 8,
      incompletos: 2,
    },
    {
      name: "Tareas",
      totales: 82,
      completados: 60,
      incompletos: 22,
    },
    {
      name: "colaboradores",
      colaboradores: 6,
    },
  ];
  const array3 = [
    {
      name: "Proyectos Totales",
      completados: 6,
      incompletos: 1,
    },
    {
      name: "Tareas",
      totales: 55,
      completados: 50,
      incompletos: 5,
    },
    {
      name: "colaboradores",
      colaboradores: 5,
    },
  ];

  return (
    <>
      <h1 className="text-4xl text-indigo-800 font-black ">
        {" "}
        Estadisticas 2023
      </h1>
      <h2 className="text-2xl text-black font-black text-center uppercase">
        Actividades
      </h2>
      <div className="graficos flex ">
        <div className="grafico1 flex-col bg-white w-1/3 text-center  mb-4 rounded-lg  text-xl items-center m-4  ">
          <h2 className="font-serif mt-4 mb-2 ">Equipo 1</h2>
          <BarChart
            className="font-mono text-xs "
            width={500}
            height={200}
            data={array}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="completados"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="incompletos"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
            <Bar
              dataKey="colaboradores"
              fill="#cabd82"
              activeBar={<Rectangle fill="#cabd82" stroke="red" />}
            />
          </BarChart>
        </div>
        <div className="grafico1 flex-col bg-white w-1/3 text-center  mb-4 rounded-lg  text-xl items-center m-4 ">
          <h2 className="font-serif mt-4 mb-2 ">Equipo 2</h2>
          <BarChart
            className="font-mono text-xs "
            width={500}
            height={200}
            data={array2}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="completados"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="incompletos"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
            <Bar
              dataKey="colaboradores"
              fill="#cabd82"
              activeBar={<Rectangle fill="#cabd82" stroke="red" />}
            />
          </BarChart>
        </div>
        <div className="grafico1 flex-col bg-white w-1/3 text-center  mb-4 rounded-lg  text-xl items-center m-4 ">
          <h2 className="font-serif mt-4 mb-2 ">Equipo 3</h2>
          <BarChart
            className="font-mono text-xs "
            width={500}
            height={200}
            data={array3}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="completados"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="incompletos"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
            <Bar
              dataKey="colaboradores"
              fill="#cabd82"
              activeBar={<Rectangle fill="#cabd82" stroke="red" />}
            />
          </BarChart>
        </div>
      </div>
    </>
  );
};

export default Estadisticas;
