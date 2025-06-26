import { useState } from "react";
import "./index.css"
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-4">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Random Robots</h1>

        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Count is: {count}
        </button>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        Edit <code className="bg-gray-200 px-1 rounded">src/App.tsx</code> and save to test HMR updates.
      </p>
      <p className="text-sm text-gray-500">Click on the Vite and React logos to learn more.</p>
    </div>
  );
}

export default App;
