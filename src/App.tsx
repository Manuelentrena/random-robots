import './index.css';
import './App.css';
import 'nes.css/css/nes.min.css';
import { RandomUserRobotRepository } from '@/core/infrastructure/random-user.api';
import { GetRobotsUseCase } from '@/core/application/get-robots.usecase';
import { RobotProvider } from '@/store/robot.provider';
import { initialConfig } from '@/config/initial';
import { Home } from './pages/Home';
import Header from './components/Header';

const repo = new RandomUserRobotRepository(initialConfig.url);
const serviceRobot = new GetRobotsUseCase(repo);

function App() {
  return (
    <RobotProvider service={serviceRobot}>
      <Header />
      <Home />
    </RobotProvider>
  );
}

export default App;
