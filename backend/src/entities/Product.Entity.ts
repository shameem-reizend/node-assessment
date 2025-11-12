import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn('uuid')
    product_id: string;

    @Column()
    name: string;

    @Column({unique: true})
    sku: string;

    @Column({type: 'decimal'})
    price: number;

    @Column()
    current_stock: number;

    @Column({type: 'decimal'})
    tax_percentage: string;

    @CreateDateColumn()
    created_at: Date

}