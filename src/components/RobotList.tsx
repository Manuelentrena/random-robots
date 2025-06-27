import { RobotCard } from '@/src/components/RobortCard';

import type { Robot } from '@/core/domain/models/Robot';

export function RobotsList({ robots }: { robots: Robot[] }) {
  return (
    <div className="space-y-6">
      <div className="min-h-screen-custom">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {robots.map((robot) => (
            <RobotCard key={robot.id} robot={robot} />
          ))}
        </ul>
      </div>
    </div>
  );
}
