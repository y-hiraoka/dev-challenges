import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity()
export class Image {
  @PrimaryColumn()
  fileId:string = "";

  @Column()
  mimetype: string = "";
}