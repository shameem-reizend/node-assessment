import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product.entity";

@Entity()
export class PurchaseEntries {

    @PrimaryGeneratedColumn('uuid')
    purchase_entry_id: string;

    @Column({type: 'decimal'})
    purchase_price: number;

    @Column()
    quantity: number;

    @CreateDateColumn()
    purchased_at: Date

    @ManyToOne(() => Product,{onDelete: 'SET NULL'})
    @JoinColumn({name: 'product_id'})
    product: Product

}