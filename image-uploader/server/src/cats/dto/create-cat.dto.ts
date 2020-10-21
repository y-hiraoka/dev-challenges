import { IsInt, IsString,IsNotEmpty, } from "class-validator";

export class CreateCatDto {
  @IsNotEmpty()
  @IsString()
  name: string = "";

  @IsInt()
  age?: number;

  @IsString()
  breed: string = "";

  sayHello () {return `I'm ${this.name}! I'm ${this.age}.`}
}