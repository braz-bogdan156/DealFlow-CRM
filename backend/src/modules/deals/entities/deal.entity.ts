import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Index,
} from 'typeorm';
import { Client } from '../../clients/entities/client.entity';
import { DealStatus } from '../../../shared/enums/deal-status.enum';

@Entity({ name: 'deals' })
export class Deal {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 200 })
  title: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  amount: number;

  @Column({ type: 'enum', enum: DealStatus, default: DealStatus.NEW })
  status: DealStatus;

  @ManyToOne(() => Client, (client) => client.deals, {
    onDelete: 'CASCADE',
  })
  @Index()
  client: Client;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
