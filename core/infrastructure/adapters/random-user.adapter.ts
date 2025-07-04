import { Coordinates } from '@/core/domain/models/Coordinates';
import { Location } from '@/core/domain/models/Location';
import { Robot } from '@/core/domain/models/Robot';
import { Street } from '@/core/domain/models/Street';
import { type RandomUserDto } from '@/core/infrastructure/types/random-user.types';
import { initialConfig } from '@/config/initial';

export const adapterToRobot = (dto: RandomUserDto): Robot => {
  const street = new Street(dto.location.street.number, dto.location.street.name);

  const coordinates = new Coordinates(
    dto.location.coordinates.latitude,
    dto.location.coordinates.longitude
  );

  const location = new Location(
    dto.location.city,
    dto.location.state,
    dto.location.country,
    dto.location.postcode.toString(),
    street,
    coordinates
  );

  const fullName = `${dto.name.title} ${dto.name.first} ${dto.name.last}`;

  return new Robot(
    dto.login.uuid,
    fullName,
    location,
    dto.email,
    adapterToPhone(dto.phone),
    `${initialConfig.avatarUrl}${encodeURIComponent(fullName)}`
  );
};

export const adapterToPhone = (phoneStr: string): number => {
  const digits = phoneStr.replace(/\D/g, '');
  const num = Number(digits);
  if (isNaN(num) || num <= 0 || !Number.isInteger(num)) {
    throw new Error(`Invalid phone number format: ${phoneStr}`);
  }
  return num;
};
