import { useContext } from 'react';
import { RobotContext, type RobotContextType } from '@/store/robot.context';

export function useRobotContext(): RobotContextType {
  const context = useContext(RobotContext);

  if (!context) {
    throw new Error('useRobotContext debe usarse dentro de un RobotProvider');
  }

  return context;
}
