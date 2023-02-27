import { NextFunction, Request, Response } from 'express';
import CarsService from '../Services/CarsService';
import ICar from '../Interfaces/ICar';

class CarsController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarsService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarsService();
  }

  async createCar() {
    const { model, year, color, status, buyValue, doorsQty, seatsQty } = this.req.body;
    const statusFinal = status !== undefined ? JSON.parse(status) : false;

    const newCar: ICar = {
      model,
      year,
      color,
      status: statusFinal,
      buyValue,
      doorsQty,
      seatsQty,
    };

    const create = await this.service.createCar(newCar);
    return this.res.status(201).json(create);
  }

  async getAll() {
    console.log('entrou no getAll');
    const allCars = await this.service.getAll();
    return this.res.status(allCars.status).json(allCars.result);
  }

  async getById() {
    const { id } = this.req.params;
    console.log(id);
    const cars = await this.service.getById(id);
    return this.res.status(cars.status).json(cars.result);
  }
}

export default CarsController;
