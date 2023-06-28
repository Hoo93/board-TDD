import { Column, PrimaryGeneratedColumn } from "typeorm";

export class BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id:number

    @Column()
    createdAt:string

    @Column()
    updatedAt:string
}