export class Coordinates {
  constructor(
    public readonly latitude: string,
    public readonly longitude: string
  ) {
    if (!Coordinates.isValidLatitude(latitude)) {
      throw new Error(`Invalid latitude: ${latitude}. Must be a number between -90 and 90.`);
    }
    if (!Coordinates.isValidLongitude(longitude)) {
      throw new Error(`Invalid longitude: ${longitude}. Must be a number between -180 and 180.`);
    }
  }

  private static isValidLatitude(lat: string): boolean {
    const num = Number(lat);
    return !isNaN(num) && num >= -90 && num <= 90;
  }

  private static isValidLongitude(lon: string): boolean {
    const num = Number(lon);
    return !isNaN(num) && num >= -180 && num <= 180;
  }
}
