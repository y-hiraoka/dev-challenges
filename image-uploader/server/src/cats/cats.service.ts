import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from '../entities/cat.entity';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectRepository(Cat) private catsRepository:Repository<Cat>){}

  async create(cat: CreateCatDto) {

    const insertResult = await this.catsRepository.insert(cat)
    return insertResult.identifiers
  }

  async findAll(): Promise<Cat[]> {
    return await this.catsRepository.find()
  }

  async findOne(id: string): Promise<Cat | undefined> {
    return await this.catsRepository.findOne(id)
  }
}
