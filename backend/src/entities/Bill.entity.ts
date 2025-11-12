import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Sales } from "./Sales.entity";

@Entity()
export class Bill {
    @PrimaryGeneratedColumn('uuid')
    bill_id: string;

    @ManyToOne(() => Sales, {onDelete: 'CASCADE'})
    @JoinColumn({name: 'sales_id'})
    sales: Sales;

    @Column({type: 'decimal'})
    tax_amount: number;

    @Column({type: 'decimal'})
    discount: number;

    @Column({type: 'decimal'})
    total_amount: number;

    @Column({default: false})
    isPaid: boolean
}