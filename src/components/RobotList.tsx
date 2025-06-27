import { RobotCard } from '@/src/components/RobortCard';

import type { Robot } from '@/core/domain/models/Robot';
import { useNavigate } from 'react-router-dom';

export function RobotsList({ robots }: { robots: Robot[] }) {
  const navigate = useNavigate();
  const handleClick = (robot: Robot) => {
    navigate(`/robot/${robot.id}`, {});
  };
  return (
    <div className="space-y-6">
      <div className="min-h-screen-custom">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {robots.map((robot) => (
            <RobotCard key={robot.id} robot={robot} onClick={handleClick} />
          ))}
        </ul>
      </div>
    </div>
  );
}
