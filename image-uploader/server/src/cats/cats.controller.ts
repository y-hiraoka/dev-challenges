import { Body, Controller, ForbiddenException, Get, HttpException, HttpStatus, Param, ParseIntPipe, ParseUUIDPipe, Post, Query, UseFilters, UsePipes, ValidationPipe } from "@nestjs/common"
import { CatsService } from "./cats.service";
import { CreateCatDto } from "./dto/create-cat.dto";

@Controller("cats")
export class CatsController {
  constructor (private catsService:CatsService) {}

  @Post()
  async create(@Body() createCatDto:CreateCatDto) {
    return await this.catsService.create(createCatDto)
  }

  @Get()
  async findAll() {
    return await this.catsService.findAll();
  }

  @Get(":id")
  async findOne(@Query("id") id:string) {
    return await this.catsService.findOne(id);
  }
}
