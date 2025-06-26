import { useState } from 'react';
import './index.css';
import './App.css';
import 'nes.css/css/nes.min.css';
import { RandomUserRobotRepository } from '@/core/infrastructure/random-user.api';
import { GetRobotsUseCase } from '@/core/application/get-robots.usecase';
import { RobotProvider } from '@/store/robot.provider';
import { RobotsList } from './components/RobotList';

const repo = new RandomUserRobotRepository('https://randomuser.me/api/');
const serviceRobot = new GetRobotsUseCase(repo);

function App() {
  const [count, setCount] = useState(0);

  return (
    <RobotProvider service={serviceRobot}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-4">
        <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md text-center">
          <h1 className="text-3xl font-bold text-custom-blue mb-4">Random Robots</h1>
          <RobotsList />
          <button onClick={() => setCount(count + 1)} type="button" className="nes-btn is-primary">
            Count is: {count}
          </button>
        </div>
      </div>
    </RobotProvider>
  );
}

export default App;
