import { User } from 'src/users/entities/user.entity';
import { EntityHelper } from 'src/utils/entity-helper';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  checkoutSessionId: string;

  @Column({ nullable: true })
  stripeSubscriptionId: string;

  @Column()
  status: string;

  @Column({ type: 'decimal' })
  amount: number;

  @CreateDateColumn()
  createdAt: string;

  @ManyToOne(() => User, { eager: true, onDelete: 'CASCADE' })
  user: User;
}
