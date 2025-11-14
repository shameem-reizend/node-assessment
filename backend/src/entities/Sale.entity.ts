import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sale {
    @PrimaryGeneratedColumn('uuid')
    sale_id: string;

    @Column({type: 'decimal', default: 0})
    discount: number;

    @Column({type: 'decimal', default: 0})
    total_amount: number;

    @Column({type: 'decimal', default: 0})
    final_amount: number;

    @CreateDateColumn()
    created_at: Date
  
}