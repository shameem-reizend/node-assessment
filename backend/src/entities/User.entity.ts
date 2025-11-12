import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    user_id: string

    @Column({type: "varchar", length: 10, unique: true})
    phone_number: string

    @Exclude()
    @Column()
    password: string

    @Column()
    name: string

}