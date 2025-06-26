import './index.css';
import './App.css';
import 'nes.css/css/nes.min.css';
import { RandomUserRobotRepository } from '@/core/infrastructure/random-user.api';
import { GetRobotsUseCase } from '@/core/application/get-robots.usecase';
import { RobotProvider } from '@/store/robot.provider';
import { RobotsList } from './components/RobotList';
import { initialConfig } from '@/config/initial';

const repo = new RandomUserRobotRepository(initialConfig.url);
const serviceRobot = new GetRobotsUseCase(repo);

function App() {
  return (
    <RobotProvider service={serviceRobot}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-4">
        <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl text-center h-[90vh] md:h-auto">
          <h1 className="text-3xl font-bold text-custom-blue mb-4">Random Robots</h1>
          <RobotsList />
        </div>
      </div>
    </RobotProvider>
  );
}

export default App;
