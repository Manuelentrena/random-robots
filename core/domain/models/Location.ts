import { Coordinates } from './Coordinates';
import { Street } from './Street';

export class Location {
  constructor(
    public readonly city: string,
    public readonly state: string,
    public readonly country: string,
    public readonly postcode: string,
    public readonly street: Street,
    public readonly coordinates: Coordinates
  ) {
    this.validateCity(city);
    this.validateState(state);
    this.validateCountry(country);
    this.validatePostcode(postcode);
    this.validateStreet(street);
    this.validateCoordinates(coordinates);
  }

  private validateCity(city: string): void {
    if (!city || city.trim().length === 0) {
      throw new Error('city is required and cannot be empty.');
    }
  }

  private validateState(state: string): void {
    if (!state || state.trim().length === 0) {
      throw new Error('state is required and cannot be empty.');
    }
  }

  private validateCountry(country: string): void {
    if (!country || country.trim().length === 0) {
      throw new Error('country is required and cannot be empty.');
    }
  }

  private validatePostcode(postcode: string): void {
    if (!postcode || postcode.trim().length === 0) {
      throw new Error('postcode is required and cannot be empty.');
    }
  }

  private validateStreet(street: Street): void {
    if (!(street instanceof Street)) {
      throw new Error('street must be an instance of Street.');
    }
  }

  private validateCoordinates(coordinates: Coordinates): void {
    if (!(coordinates instanceof Coordinates)) {
      throw new Error('coordinates must be an instance of Coordinates.');
    }
  }
}
