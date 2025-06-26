import { type RobotRepository } from '@/core/domain/repositories/robot.repository';
import { Robot } from '@/core/domain/models/Robot';
import { type RandonUserResponse } from '@/core/infrastructure/types/random-user.types';
import { adapterToRobot } from '@/core/infrastructure/adapters/random-user.adapter';

export class RandomUserRobotRepository implements RobotRepository {
  constructor(private readonly baseUrl: string) {}

  async getRobots(page: number, results: number): Promise<Robot[]> {
    const url = `${this.baseUrl}?page=${page}&results=${results}`;
    const res = await fetch(url);
    const data: RandonUserResponse = await res.json();

    return data.results.map(adapterToRobot);
  }
}
