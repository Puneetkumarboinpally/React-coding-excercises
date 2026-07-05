const App = () => {
  return (
    <div className="flex justify-center items-center bg-gray-600 h-screen">
      <div className="bg-white/10 border border-white/20 p-8 rounded-xl text-center shadow-md">
        <h1 className="text-lg font-bold text-white capitalize mb-2">Dark mode with local Storage</h1>
        <button className="px-4 py-2 bg-white mx-4 rounded font-semibold cursor-pointer shadow-lg transition all duration-300 hover:translate-y-[-2px]">Light Mode</button>
        <button className="px-4 py-2 bg-white rounded font-semibold cursor-pointer shadow-lg transition all duration-300 hover:translate-y-[-2px]">Dark Mode</button>
      </div>
    </div>
  );
};

export default App;
