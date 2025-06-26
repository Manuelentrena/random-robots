import { useEffect, useState } from 'react';
import { Robot } from '@/core/domain/models/Robot';
import { useRobotContext } from '@/src/hooks/useRobotContext';

export function RobotsList() {
  const { service } = useRobotContext();
  const [robots, setRobots] = useState<Robot[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  console.log({ robots });

  useEffect(() => {
    setLoading(true);
    service
      .execute(1, 10)
      .then((fetchedRobots) => {
        setRobots(fetchedRobots);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Error fetching robots');
        setLoading(false);
      });
  }, [service]);

  if (loading) return <p>Cargando robots...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {robots.map((robot) => (
        <li key={robot.id}>
          <p>
            <strong>{robot.name}</strong>
          </p>
          <p>Email: {robot.email}</p>
          <p>Phone: {robot.phone}</p>
          <p>
            Location: {robot.location.city}, {robot.location.country}
          </p>
        </li>
      ))}
    </ul>
  );
}
