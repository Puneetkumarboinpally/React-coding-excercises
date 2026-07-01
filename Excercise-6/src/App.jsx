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
    <div className="p-8 grid sm:grid-cols-2  lg:grid-cols-4 gap-5">
      {task.map((elem, idx) => (
        <div
          key={idx}
          className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-center"
        >
          <img
            src={elem.download_url}
            className="h-60 w-full object-cover rounded-xl "
          />
          <h2>{elem.author}</h2>
          <p>Lorem ipsum dolor, sie amet consectetur adipisicing elit.</p>
        </div>
      ))}
    </div>
  );
};

export default App;
