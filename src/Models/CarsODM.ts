import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';

import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

class CarsODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });

    super(schema, 'cars');
  }

  public async getAll(): Promise<Array<ICar | null>> {
    return this.model.find();
  }

  public async getById(id: string): Promise<ICar | null> {
    return this.model.findOne({ id });
  }
}

export default CarsODM;
