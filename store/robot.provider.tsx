import { type ReactNode, useEffect, useMemo, useState } from 'react';
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
  const [initialLoading, setInitialLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [currentPage, setCurrentPage] = useState(initialConfig.page);

  const robotsById = useMemo(() => {
    const map = new Map<string, Robot>();
    robots.forEach((robot) => map.set(robot.id, robot));
    return map;
  }, [robots]);

  const refreshRobots = async (page = initialConfig.page, results = initialConfig.results) => {
    setInitialLoading(true);
    setError(null);

    try {
      const newRobots = await service.execute(page, results);
      setRobots(newRobots);
      setCurrentPage(initialConfig.page);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
    } finally {
      setInitialLoading(false);
    }
  };

  const nextRobots = async (results = initialConfig.results) => {
    const nextPage = currentPage + 1;
    setLoadingMore(true);
    setError(null);
    try {
      const newRobots = await service.execute(nextPage, results);
      setRobots((prev) => [...prev, ...newRobots]);
      setCurrentPage(nextPage);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
    } finally {
      setLoadingMore(false);
    }
  };

  const getRobotById = (id: string) => robotsById.get(id);

  useEffect(() => {
    refreshRobots();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <RobotContext.Provider
      value={{
        service,
        robots,
        initialLoading,
        loadingMore,
        error,
        refreshRobots,
        nextRobots,
        getRobotById,
      }}
    >
      {children}
    </RobotContext.Provider>
  );
}
