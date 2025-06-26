import { Location } from './Location';

export class Robot {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly location: Location,
    public readonly email: string,
    public readonly phone: number
  ) {
    this.validateId(id);
    this.validateName(name);
    this.validateLocation(location);
    this.validateEmail(email);
    this.validatePhone(phone);
  }

  private validateId(id: string): void {
    const uuidRegex = /^[0-9a-fA-F-]{36}$/;
    if (!uuidRegex.test(id)) {
      throw new Error(`Invalid id: ${id}. Must be a valid UUID.`);
    }
  }

  private validateName(name: string): void {
    if (!name || name.trim().length === 0) {
      throw new Error('Name is required and cannot be empty.');
    }
  }

  private validateLocation(location: Location): void {
    if (!(location instanceof Location)) {
      throw new Error('Location must be an instance of Location.');
    }
  }

  private validateEmail(email: string): void {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error(`Invalid email format: ${email}`);
    }
  }

  private validatePhone(phone: number): void {
    if (typeof phone !== 'number' || phone <= 0 || !Number.isInteger(phone)) {
      throw new Error(`Invalid phone number: ${phone}. Must be a positive integer.`);
    }
  }
}
