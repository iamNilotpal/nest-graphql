import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { cwd } from 'process';
import { CoffeeModule } from './coffee/coffee.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(cwd(), 'src/graphql/schema.graphql'),
      buildSchemaOptions: {
        numberScalarMode: 'integer',
      },
    }),
    CoffeeModule,
  ],
})
export class AppModule {}
