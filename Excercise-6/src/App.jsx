import { useEffect, useState } from "react";

const App = () => {
  const [task, setTask] = useState([]);

  const user = async () => {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=2&limit=30",
    );

    const data = await response.json();
    setTask(data);
  };

  useEffect(() => {
    user();
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
      {task.map((elem) => (
        <div
          key={elem.id}
          className="flex flex-col justify-between p-4 bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-2xl text-center"
        >
          <img
            src={elem.download_url}
            className="h-52 w-full object-cover rounded-xl transition-all duration-300 hover:scale-105"
          />
          <h2 className="my-2 text-lg font-semibold">Author: {elem.author}</h2>
          <p className="mb-4">
            Lorem ipsum dolor, sie amet consectetur adipisicing elit.
          </p>
          <a
            href={elem.url}
            target="_blank"
            rel="noreferrer"
            className="block py-2 px-4 w-full font-semibold rounded-lg bg-white/30 shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            More info
          </a>
        </div>
      ))}
    </div>
  );
};

export default App;
