export class Street {
  constructor(
    public readonly number: number,
    public readonly name: string
  ) {
    this.validateNumber(number);
    this.validateName(name);
  }

  private validateNumber(number: number): void {
    if (typeof number !== 'number' || number <= 0 || !Number.isInteger(number)) {
      throw new Error(`Invalid street number: ${number}. Must be a positive integer.`);
    }
  }

  private validateName(name: string): void {
    if (!name || name.trim().length === 0) {
      throw new Error('Street name is required and cannot be empty.');
    }
  }
}
