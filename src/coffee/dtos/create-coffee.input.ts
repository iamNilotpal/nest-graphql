import { InputType } from '@nestjs/graphql';
import { MinLength, MaxLength, IsString } from 'class-validator';

@InputType()
export class CreateCoffeeInput {
  @MinLength(3)
  @MaxLength(50)
  name: string;

  @IsString()
  brand: string;

  @IsString({ each: true })
  flavours: string[];
}
