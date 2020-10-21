import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { TimeoutError } from 'rxjs';
import { ImagesService } from './images.service';

@Controller('images')
export class ImagesController {
  constructor(private imageService: ImagesService) {}

  @Post()
  @UseInterceptors(
    FilesInterceptor('files', 2, {
      dest: '../uploadedFiles',
    }),
  )
  async upload(@UploadedFiles() files?: Express.Multer.File[]) {
    if (!files) throw new BadRequestException();

    const result = await this.imageService.createImages(
      files.map(file => ({ fileId: file.filename, mimetype: file.mimetype })),
    );

    return result.identifiers
  }

  @Get()
  async getAllImages() {
    return await this.imageService.findAll();
  }

  @Get(':fileId')
  async getImage(@Param('fileId') fileId: string, @Res() res: Response) {
    const entity = await this.imageService.findById(fileId);

    if (!entity) {
      res.status(404).send();
      return;
    }

    res
      .contentType(entity.mimetype)
      .sendFile(entity.fileId, { root: '../uploadedFiles' });
  }
}
