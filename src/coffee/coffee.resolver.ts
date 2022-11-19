import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateCoffeeInput } from './dtos/create-coffee.input';
import { Coffee } from './entities/coffee.entity';

@Resolver()
export class CoffeeResolver {
  @Query(() => [Coffee], { name: 'coffees' })
  async findAll() {
    return [];
  }

  @Query(() => Coffee, { name: 'coffee' })
  async findOne(@Args('id', { type: () => ID }) id: number): Promise<Coffee> {
    return {
      id,
      brand: 'IDK',
      name: `Coffee #${id}`,
      flavours: [],
    };
  }

  @Mutation(() => Coffee, { name: 'createCoffee', nullable: true })
  async create(
    @Args('createCoffeeInput') createCoffeeInput: CreateCoffeeInput,
  ): Promise<Coffee> {
    return {
      id: Math.floor(Math.random() * 100),
      ...createCoffeeInput,
    };
  }
}
