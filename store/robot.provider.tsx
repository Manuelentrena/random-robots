import { type ReactNode } from 'react';
import { RobotContext } from '@/store/robot.context';
import type { GetRobotsUseCase } from '@/core/application/get-robots.usecase';

interface RobotProviderProps {
  children: ReactNode;
  service: GetRobotsUseCase;
}

export function RobotProvider({ children, service }: RobotProviderProps) {
  return <RobotContext.Provider value={{ service }}>{children}</RobotContext.Provider>;
}
