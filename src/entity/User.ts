import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class user {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    username: string

    @Column()
    password: string
}