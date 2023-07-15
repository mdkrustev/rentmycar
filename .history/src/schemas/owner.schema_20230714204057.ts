import { Prop, Schema, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CarDocument = HydratedDocument<Car>;

@Schema()
export class Car {
  @Prop()
  vehicle: string;

  @Prop()
  brand: string;

  @Prop()
  seats: number;

  @Prop()
  truckSize: object;

  @Prop()
  drivingCategory: string;
}
