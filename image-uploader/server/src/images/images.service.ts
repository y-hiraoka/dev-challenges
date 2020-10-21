import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Image } from "../entities/image.entity";

@Injectable()
export class ImagesService {
  constructor(@InjectRepository(Image) private imagesRepository:Repository<Image>) {}

  findById(id:string):Promise<Image | undefined> {
    return this.imagesRepository.findOne(id)
  }

  createImages(images:Image[]) {
    return this.imagesRepository.insert(images);
  }

  findAll() {
    return this.imagesRepository.find();
  }
}