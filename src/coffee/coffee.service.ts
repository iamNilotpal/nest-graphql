import { Injectable } from '@nestjs/common';
import { CreateCoffeeInput } from './dtos/create-coffee.input';
import { Coffee } from './entities/coffee.entity';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class CoffeeService {
  private coffees: Coffee[] = [];

  findAll() {
    return this.coffees;
  }

  findOne(id: number) {
    const coffee = this.coffees.find((coffee) => coffee.id === id);
    if (!coffee)
      throw new NotFoundException(`Coffee with id ${id} doesn't exist`);
    return coffee;
  }

  create(createCoffeeDto: CreateCoffeeInput) {
    const coffee = { id: Math.floor(Math.random() * 100), ...createCoffeeDto };
    this.coffees.push(coffee);
    return coffee;
  }

  delete(id: number) {
    const deletedCoffee = this.findOne(id);
    this.coffees = this.coffees.filter((coffee) => coffee.id !== id);
    return deletedCoffee;
  }
}
