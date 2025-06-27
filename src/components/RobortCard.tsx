import React from 'react';
import type { Robot } from '@/core/domain/models/Robot';

interface RobotCardProps {
  robot: Robot;
  onClick?: () => void;
}

export const RobotCard: React.FC<RobotCardProps> = ({ robot, onClick }) => (
  <li
    className="nes-container with-title is-rounded nes-pointer relative group h-80 p-0 m-0"
    style={{
      backgroundImage: `url(${robot.avatarUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
    }}
    onClick={onClick}
  >
    <p className="title !bg-black text-white">{robot.name}</p>
    {/* Globo de diálogo con posición absoluta */}
    <p className="absolute nes-balloon from-left nes-pointer transform scale-50 -translate-y-10 left-16 z-5">
      Hi! my name is {robot.name}.
    </p>
    {/* Overlay que aparece solo al hover */}
    <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity" />

    {/* Contenido que aparece solo al hover */}
    <div className="absolute inset-0 z-10 flex flex-col items-start justify-center h-full text-white opacity-0 group-hover:opacity-100 transition-opacity space-y-2">
      <section className="w-full p-2">
        <div className="flex items-center mb-4">
          <i className="nes-icon reddit is-medium flex-shrink-0" />
          <p className="ml-2 flex-1 text-xs text-gray-200 text-left">{robot.name}</p>
        </div>

        <div className="flex items-center mb-4">
          <i className="nes-icon gmail is-medium flex-shrink-0 " />
          <p className="ml-2 flex-1 text-xs text-gray-200 text-left truncate">{robot.email}</p>
        </div>

        <div className="flex items-center mb-4">
          <i className="nes-icon whatsapp is-medium flex-shrink-0" />
          <p className="ml-2 flex-1 text-sm text-gray-200 text-left">{robot.phone}</p>
        </div>
      </section>
    </div>
  </li>
);
