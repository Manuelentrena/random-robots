import { useRobotContext } from '@/src/hooks/useRobotContext';

export function RobotsList() {
  const { robots, loading, error, refreshRobots } = useRobotContext();

  if (loading) return <p>Cargando robots...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <ul>
        {robots.map((robot) => (
          <li key={robot.id}>{robot.name}</li>
        ))}
      </ul>
      <button type="button" className="nes-btn is-primary" onClick={() => refreshRobots()}>
        Recargar Robots
      </button>
    </div>
  );
}
