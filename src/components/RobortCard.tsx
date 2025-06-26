import React from 'react';
import type { Robot } from '@/core/domain/models/Robot';

interface RobotCardProps {
  robot: Robot;
  onClick?: () => void;
}

export const RobotCard: React.FC<RobotCardProps> = ({ robot, onClick }) => (
  <li
    className="nes-container with-title is-rounded nes-pointer relative overflow-hidden group h-80 p-0"
    style={{
      backgroundImage: `url(${robot.avatarUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    onClick={onClick}
  >
    {/* Overlay que aparece solo al hover */}
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity" />

    {/* Contenido que aparece solo al hover */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white opacity-0 group-hover:opacity-100 transition-opacity space-y-2">
      <section className="w-full px-4">
        <div className="flex items-center mb-4">
          <i className="nes-icon reddit is-medium flex-shrink-0" />
          <p className="ml-2 flex-1 text-xs text-gray-200 truncate text-left">{robot.name}</p>
        </div>

        <div className="flex items-center mb-4">
          <i className="nes-icon gmail is-medium flex-shrink-0" />
          <p className="ml-2 flex-1 text-xs text-gray-200 truncate text-left">{robot.email}</p>
        </div>

        <div className="flex items-center mb-4">
          <i className="nes-icon whatsapp is-medium flex-shrink-0" />
          <p className="ml-2 flex-1 text-sm text-gray-200 truncate text-left">{robot.phone}</p>
        </div>
      </section>
    </div>
  </li>
);
