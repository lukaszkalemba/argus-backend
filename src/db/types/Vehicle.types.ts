import { Document } from 'mongoose';

export interface IVehicleSchema extends Document {
  name: string;
}
