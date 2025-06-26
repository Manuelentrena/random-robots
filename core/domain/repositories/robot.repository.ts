import { Robot } from '@/core/domain/models/Robot';

export interface RobotRepository {
  getRobots(page: number, results: number): Promise<Robot[]>;
}
