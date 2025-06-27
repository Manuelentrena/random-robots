import { render, type RenderOptions, type RenderResult } from '@testing-library/react';
import { type ReactNode, type ReactElement, type JSX } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RandomUserRobotRepository } from '@/core/infrastructure/random-user.api';
import { GetRobotsUseCase } from '@/core/application/get-robots.usecase';
import { RobotProvider } from '@/store/robot.provider';
import { initialConfig } from '@/config/initial';

const robotRepository = new RandomUserRobotRepository(initialConfig.url);
const robotService = new GetRobotsUseCase(robotRepository);

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  initialRoute?: string;
}

interface CustomRenderResult extends RenderResult {
  robotService: GetRobotsUseCase;
  robotRepository: RandomUserRobotRepository;
}

interface WrapperProps {
  children: ReactNode;
}

export function renderWithProviders(
  ui: ReactElement,
  options?: CustomRenderOptions
): CustomRenderResult {
  function Wrapper({ children }: WrapperProps): JSX.Element {
    return (
      <Router basename={options?.initialRoute || '/'}>
        <RobotProvider service={robotService}>{children}</RobotProvider>
      </Router>
    );
  }

  const renderResult = render(ui, { wrapper: Wrapper, ...options });

  return {
    ...renderResult,
    robotService,
    robotRepository,
  };
}

export { robotService, robotRepository };
