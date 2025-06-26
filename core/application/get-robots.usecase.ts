import { type RobotRepository } from '@/core/domain/repositories/robot.repository';
import { Robot } from '@/core/domain/models/Robot';

export class GetRobotsUseCase {
  constructor(private readonly robotRepository: RobotRepository) {}

  async execute(page: number, results: number): Promise<Robot[]> {
    return await this.robotRepository.getRobots(page, results);
  }
}
