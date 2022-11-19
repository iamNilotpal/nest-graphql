import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCoffeeInput } from './dtos/create-coffee.input';
import { UpdateCoffeeInput } from './dtos/update-coffee.input';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeeService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}

  async findAll() {
    return this.coffeeRepository.find();
  }

  async findOne(id: number) {
    const coffee = await this.coffeeRepository.findOne({ where: { id } });
    if (!coffee)
      throw new NotFoundException(`Coffee with id ${id} doesn't exist`);
    return coffee;
  }

  async create(createCoffeeDto: CreateCoffeeInput) {
    const coffee = this.coffeeRepository.create(createCoffeeDto);
    return this.coffeeRepository.save(coffee);
  }

  async delete(id: number) {
    const deletedCoffee = await this.findOne(id);
    await this.coffeeRepository.delete(id);
    return deletedCoffee;
  }

  async update(
    id: number,
    updateCoffeeDto: UpdateCoffeeInput,
  ): Promise<Coffee> {
    const coffee = await this.findOne(id);
    await this.coffeeRepository.update(id, updateCoffeeDto);
    return { ...coffee, ...updateCoffeeDto };
  }
}
