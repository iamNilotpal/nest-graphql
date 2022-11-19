import { Args, ID, Query, Resolver } from '@nestjs/graphql';
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
      flavour: [],
    };
  }
}
