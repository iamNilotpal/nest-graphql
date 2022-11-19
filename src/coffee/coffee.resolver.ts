import { ParseIntPipe } from '@nestjs/common';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CoffeeService } from './coffee.service';
import { CreateCoffeeInput } from './dtos/create-coffee.input';
import { UpdateCoffeeInput } from './dtos/update-coffee.input';
import { Coffee } from './entities/coffee.entity';

@Resolver()
export class CoffeeResolver {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Query(() => [Coffee], { name: 'coffees' })
  async findAll() {
    return await this.coffeeService.findAll();
  }

  @Query(() => Coffee, { name: 'coffee' })
  async findOne(
    @Args('id', { type: () => ID }, ParseIntPipe) id: number,
  ): Promise<Coffee> {
    return await this.coffeeService.findOne(id);
  }

  @Mutation(() => Coffee, { name: 'createCoffee', nullable: true })
  async create(
    @Args('createCoffeeInput') createCoffeeInput: CreateCoffeeInput,
  ): Promise<Coffee> {
    return await this.coffeeService.create(createCoffeeInput);
  }

  @Mutation(() => Coffee, { name: 'deleteCoffee', nullable: true })
  async delete(
    @Args('id', { type: () => ID }, ParseIntPipe) id: number,
  ): Promise<Coffee> {
    return await this.coffeeService.delete(id);
  }

  @Mutation(() => Coffee, { name: 'updateCoffee', nullable: true })
  async update(
    @Args('id', { type: () => ID }, ParseIntPipe) id: number,
    @Args('updateCoffeeInput') updateCoffeeInput: UpdateCoffeeInput,
  ) {
    return await this.coffeeService.update(id, updateCoffeeInput);
  }
}
