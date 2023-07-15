import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Car } from './car.schema';

export type OwnerDocument = HydratedDocument<Owner>;

@Schema()
export class Owner {
  @Prop()
  name: string;

  @Prop()
  city: string;

  @Prop()
  zip: number;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop({ type: [{ type: Car }] })
  cars: Car[];
}

export const CarSchema = SchemaFactory.createForClass(Owner);
