import React from 'react';
import type { Robot } from '@/core/domain/models/Robot';

interface RobotCardProps {
  robot: Robot;
  onClick: (robot: Robot) => void;
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
    onClick={() => onClick(robot)}
  >
    <p className="title !bg-black text-white">{robot.name}</p>
    {/* Globo de diálogo con posición absoluta */}
    <p className="absolute nes-balloon from-left nes-pointer transform scale-50 -translate-y-10 left-16 z-5">
      Hi! my name is {robot.name}
    </p>

    {/* Contenido hover con animación completa */}
    <div className="absolute inset-x-0 bottom-0 h-0 z-10 bg-black bg-opacity-75 flex flex-col justify-end opacity-0 group-hover:h-full group-hover:opacity-100 transition-all duration-500 ease-in-out">
      <section className="w-full p-2">
        <p className="text-left w-full flex items-center mb-2">
          <a href="#" className="text-lg text-gray-200 mr-2">
            #
          </a>
          <span className="text-gray-200">Contact Info:</span>
        </p>

        <div className="flex items-center mb-4">
          <i className="nes-icon gmail is-small flex-shrink-0 " />
          <p className="m-0 ml-2 flex-1 text-xs text-gray-200 text-left truncate">{robot.email}</p>
        </div>

        <div className="flex items-center mb-4">
          <i className="nes-icon whatsapp is-small flex-shrink-0" />
          <p className="m-0 ml-2 flex-1 text-[10px] text-gray-200 text-left">{robot.phone}</p>
        </div>
      </section>
    </div>
  </li>
);
