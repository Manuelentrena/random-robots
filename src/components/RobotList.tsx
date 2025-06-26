import { useRobotContext } from '@/src/hooks/useRobotContext';
import { RobotCard } from '@/src/components/RobortCard';

export function RobotsList() {
  const { robots, error, refreshRobots, nextRobots, initialLoading, loadingMore } =
    useRobotContext();

  if (initialLoading) return <p>Cargando robots...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="space-y-6">
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
  );
}
