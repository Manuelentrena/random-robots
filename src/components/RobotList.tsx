import { useRobotContext } from '@/src/hooks/useRobotContext';
import { RobotCard } from '@/src/components/RobortCard';
import { useEffect, useRef } from 'react';
import useObserver from '@/src/hooks/useObserver';

export function RobotsList() {
  const { robots, error, refreshRobots, nextRobots, initialLoading, loadingMore } =
    useRobotContext();
  const sentinelRef = useRef<HTMLDivElement>(null);
  const { isObserver } = useObserver({
    externalRef: sentinelRef as React.RefObject<HTMLElement>,
    shouldStop: loadingMore || initialLoading,
  });

  useEffect(() => {
    if (isObserver && !loadingMore) {
      nextRobots();
    }
  }, [isObserver, loadingMore, nextRobots]);

  if (initialLoading)
    return (
      <div className="min-h-screen-custom">
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500">Cargando robots...</p>
        </div>
      </div>
    );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="space-y-6">
      <div className="min-h-screen-custom">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {robots.map((robot) => (
            <RobotCard key={robot.id} robot={robot} />
          ))}
        </ul>

        <div className="flex justify-center gap-4 items-center">
          <button
            type="button"
            className={`nes-btn is-primary ${loadingMore ? 'is-disabled' : ''}`}
            onClick={() => nextRobots()}
            disabled={loadingMore}
          >
            {loadingMore ? 'Cargando más...' : 'Añadir Robots'}
          </button>
          <button type="button" className="nes-btn is-warning" onClick={() => refreshRobots()}>
            Recargar Robots
          </button>
        </div>
      </div>
      <div ref={sentinelRef} />
    </div>
  );
}
