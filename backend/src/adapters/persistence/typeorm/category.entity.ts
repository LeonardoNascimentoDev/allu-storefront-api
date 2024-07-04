import { ApiProperty } from "@nestjs/swagger";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("categories")
export class CategoryEntity {
  @ApiProperty({
    example: "1",
    description: "ID da categoria",
    type: String,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: "Smartphones",
    description: "Categoria do produto",
    type: String,
  })
  @Column({ type: "varchar", length: 255 })
  category: string;

  @ApiProperty({
    example: "Imagens",
    description: "Fotos da categoria",
    type: String,
  })
  @Column({ type: "varchar", length: 1000 })
  photo: string;
}
