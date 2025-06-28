import {
  type RandomUserDto,
  type RandomUserInfo,
  type RandonUserResponse,
} from '@/core/infrastructure/types/random-user.types';

export const responseMock = {
  results: [] as RandomUserDto[],
  info: {
    seed: '3b290148e77b1c29',
    results: 10,
    page: 1,
    version: '1.4',
  } as RandomUserInfo,
} as RandonUserResponse;
