import { type ReactNode, useEffect, useState } from 'react';
import { RobotContext } from '@/store/robot.context';
import type { GetRobotsUseCase } from '@/core/application/get-robots.usecase';
import type { Robot } from '@/core/domain/models/Robot';
import { initialConfig } from '@/config/initial';

interface RobotProviderProps {
  children: ReactNode;
  service: GetRobotsUseCase;
}

export function RobotProvider({ children, service }: RobotProviderProps) {
  const [robots, setRobots] = useState<Robot[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [currentPage, setCurrentPage] = useState(initialConfig.page);

  const refreshRobots = async (page = initialConfig.page, results = initialConfig.results) => {
    setLoading(true);
    setError(null);

    try {
      const newRobots = await service.execute(page, results);
      setRobots(newRobots);
      setCurrentPage(initialConfig.page);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  const nextRobots = async (results = initialConfig.results) => {
    const nextPage = currentPage + 1;
    setLoading(true);
    setError(null);
    try {
      const newRobots = await service.execute(nextPage, results);
      setRobots((prev) => [...prev, ...newRobots]);
      setCurrentPage(nextPage);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  // Cargar robots al montar una sola vez
  useEffect(() => {
    refreshRobots();
  }, []);

  return (
    <RobotContext.Provider value={{ service, robots, loading, error, refreshRobots, nextRobots }}>
      {children}
    </RobotContext.Provider>
  );
}
