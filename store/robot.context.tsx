import { createContext } from 'react';
import type { GetRobotsUseCase } from '@/core/application/get-robots.usecase';

export interface RobotContextType {
  service: GetRobotsUseCase;
}

export const RobotContext = createContext<RobotContextType | null>(null);
