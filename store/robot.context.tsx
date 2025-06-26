import { createContext } from 'react';
import type { GetRobotsUseCase } from '@/core/application/get-robots.usecase';
import type { Robot } from '@/core/domain/models/Robot';

export interface RobotContextType {
  service: GetRobotsUseCase;
  robots: Robot[];
  initialLoading: boolean;
  loadingMore: boolean;
  error: Error | null;
  refreshRobots: (page?: number, results?: number) => Promise<void>;
  nextRobots: (results?: number) => Promise<void>;
}

export const RobotContext = createContext<RobotContextType | null>(null);
