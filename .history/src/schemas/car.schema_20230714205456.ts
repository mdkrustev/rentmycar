import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Owner } from './owner.schema';

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

  @Prop({ type: Types.ObjectId, ref: 'Owner' }) // References the User document
  owner: Owner;
}

export const CarSchema = SchemaFactory.createForClass(Car);
