import { InputType } from '@nestjs/graphql';

@InputType()
export class UpdateCoffeeInput {
  name?: string;
  brand?: string;
  flavours?: string[];
}
