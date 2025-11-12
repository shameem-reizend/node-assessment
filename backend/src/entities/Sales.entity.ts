import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product.entity";
import { Expose } from "class-transformer";

@Entity()
export class Sales {

    @PrimaryGeneratedColumn('uuid')
    sales_id: string;

    @Column({type: 'decimal'})
    sales_price: number;

    @Column()
    quantity: number;

    @CreateDateColumn()
    sold_at: Date;

    @ManyToOne(() => Product,{onDelete: 'SET NULL'})
    @JoinColumn({name: 'product_id'})
    product: Product;

    @Expose()
    public get discount(): number {
        if(this.sales_price < 1000){
            return 0;
        } else if(this.sales_price > 1000 && this.sales_price < 2000){
            return this.sales_price * 0.1;
        } else {
            return this.sales_price * 0.2
        }
    }

}