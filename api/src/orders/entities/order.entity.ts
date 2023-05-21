import { Allow } from 'class-validator';
import { Plan } from 'src/plans/entities/plan.entity';
import { User } from 'src/users/entities/user.entity';
import { EntityHelper } from 'src/utils/entity-helper';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Order extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  keyword: string;

  @Column({ nullable: true })
  sublink: string;

  @Column({ nullable: true })
  subscriptionId: string;

  @Column({ default: false })
  fulfilmentStatus: string;

  @Column({ default: false })
  isPremium: boolean;

  @Column({ nullable: true })
  total: number;

  @Column({ nullable: true })
  subTotal: number;

  @Column({ nullable: true })
  discount: number;

  @Column({ nullable: true })
  discountCode: string;

  @Column({ nullable: true })
  checkoutSessionId: string;

  @Index()
  @Allow()
  @ManyToOne(() => User, {
    eager: true,
  })
  user: User;

  @Index()
  @Allow()
  @ManyToOne(() => Plan, {
    eager: true,
  })
  plan?: Plan;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
