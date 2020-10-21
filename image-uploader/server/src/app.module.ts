import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './cats/cats.module';
import { EntitiesModule } from './entities/entities.module';
import { ImagesModule } from './images/images.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: 3306,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB,
      autoLoadEntities:true,
      synchronize: true,
    }),
    EntitiesModule,
    ImagesModule,
    CatsModule,
  ],
})
export class AppModule {}
