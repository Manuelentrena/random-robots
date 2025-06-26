import { useState } from 'react';
import './index.css';
import './App.css';
import 'nes.css/css/nes.min.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-4">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-custom-blue mb-4">Random Robots</h1>
        <button onClick={() => setCount(count + 1)} type="button" className="nes-btn is-primary">
          Count is: {count}
        </button>
      </div>
    </div>
  );
}

export default App;
