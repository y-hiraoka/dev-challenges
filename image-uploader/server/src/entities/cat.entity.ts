import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity()
export class Cat {
  @PrimaryColumn({generated:"uuid"})
  id:string = "";

  @Column()
  name: string = "";

  @Column()
  age:number = 0

  @Column()
  breed: string = "";
}