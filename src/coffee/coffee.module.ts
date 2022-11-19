import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeResolver } from './coffee.resolver';
import { CoffeeService } from './coffee.service';
import { Coffee } from './entities/coffee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee])],
  providers: [CoffeeResolver, CoffeeService],
})
export class CoffeeModule {}
