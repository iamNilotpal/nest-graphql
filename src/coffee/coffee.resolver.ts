import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CoffeeService } from './coffee.service';
import { CreateCoffeeInput } from './dtos/create-coffee.input';
import { Coffee } from './entities/coffee.entity';

@Resolver()
export class CoffeeResolver {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Query(() => [Coffee], { name: 'coffees' })
  async findAll() {
    return this.coffeeService.findAll();
  }

  @Query(() => Coffee, { name: 'coffee' })
  async findOne(@Args('id', { type: () => ID }) id: number): Promise<Coffee> {
    return this.coffeeService.findOne(id);
  }

  @Mutation(() => Coffee, { name: 'createCoffee', nullable: true })
  async create(
    @Args('createCoffeeInput') createCoffeeInput: CreateCoffeeInput,
  ): Promise<Coffee> {
    return this.coffeeService.create(createCoffeeInput);
  }

  @Mutation(() => Coffee, { name: 'deleteCoffee', nullable: true })
  async delete(@Args('id') id: number): Promise<Coffee> {
    return this.coffeeService.delete(id);
  }
}
