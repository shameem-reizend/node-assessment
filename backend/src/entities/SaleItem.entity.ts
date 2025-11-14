import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product.entity";
import { Expose } from "class-transformer";
import { Sale } from "./Sale.entity";

@Entity()
export class SaleItem {

    @PrimaryGeneratedColumn('uuid')
    sale_id: string;

    @Column({type: 'decimal'})
    sales_price: number;

    @Column()
    quantity: number;

    @CreateDateColumn()
    sold_at: Date;

    @ManyToOne(() => Sale, { onDelete: "CASCADE", nullable: false })
    @JoinColumn({ name: 'sale_id' })
    sale: Sale

    @ManyToOne(() => Product,{onDelete: 'SET NULL'})
    @JoinColumn({name: 'product_id'})
    product: Product;


}