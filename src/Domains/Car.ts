import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    super(car);
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }

  getDoorsQty() {
    return this.doorsQty;
  }

  getSeatsQty() {
    return this.seatsQty;
  }
}

export default Car;
