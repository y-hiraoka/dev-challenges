import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './cat.entity';
import { Image } from './image.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Image, Cat])],
  exports: [TypeOrmModule],
})
export class EntitiesModule {}
