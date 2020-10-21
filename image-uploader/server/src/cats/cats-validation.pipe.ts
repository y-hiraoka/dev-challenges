import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsValidationPipe
  implements PipeTransform<Partial<CreateCatDto>, CreateCatDto> {
  transform(
    value: Partial<CreateCatDto>,
    metadata: ArgumentMetadata,
  ): CreateCatDto {
    console.log(metadata.type === "body")

    if (!(value.name && value.age && value.breed)) {
      throw new BadRequestException();
    }

    const dto = new CreateCatDto();
    dto.name = value.name;
    dto.age = value.age;
    dto.breed = value.breed;

    return dto;
  }
}
