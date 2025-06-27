import { type ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const RobotContainer = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-4">
      <div
        className={`nes-container with-title is-centered bg-slate-100 shadow-md is-rounded p-8 w-full max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl text-center md:h-auto ${className}`}
      >
        {children}
      </div>
    </div>
  );
};
