import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { cwd } from 'process';
import { CoffeeModule } from './coffee/coffee.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      port: 5432,
      type: 'postgres',
      host: 'localhost',
      password: 'postgres',
      database: 'postgres',
      username: 'postgres',
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV === 'production' ? false : true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(cwd(), 'src/graphql/schema.graphql'),
    }),
    CoffeeModule,
  ],
})
export class AppModule {}
