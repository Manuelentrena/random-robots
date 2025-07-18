import './index.css';
import './App.css';
import 'nes.css/css/nes.min.css';
import { RandomUserRobotRepository } from '@/core/infrastructure/random-user.api';
import { GetRobotsUseCase } from '@/core/application/get-robots.usecase';
import { RobotProvider } from '@/store/robot.provider';
import { initialConfig } from '@/config/initial';
import { Home } from '@/src/pages/Home';
import Header from '@/src/components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from './pages/Detail';
import ScrollToTopButton from '@/src/components/ScrollToTopButton';
import MyRepo from '@/src/components/MyRepo';

const repo = new RandomUserRobotRepository(initialConfig.url);
const serviceRobot = new GetRobotsUseCase(repo);

function App() {
  return (
    <Router>
      <RobotProvider service={serviceRobot}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/robot/:id" element={<Detail />} />
        </Routes>
        <MyRepo />
        <ScrollToTopButton />
      </RobotProvider>
    </Router>
  );
}

export default App;
