import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Allow } from 'class-validator';
import { User } from 'src/users/entities/user.entity';
import { EntityHelper } from 'src/utils/entity-helper';
import { Keyword } from 'src/keywords/entities/keyword.entity';
import { Plan } from 'src/plans/entities/plan.entity';

@Entity({ name: 'subscription' })
export class Subscription extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Allow()
  @ManyToOne(() => User, {
    eager: true,
  })
  user: User;

  @Column({ nullable: true })
  letters: string;

  @Index()
  @Column({ nullable: true })
  purchaseDate: Date;

  @Index()
  @Column({ nullable: true })
  renewalDate: Date;

  @Column({ type: 'decimal', nullable: true })
  renewalPrice: number;

  @Column({ nullable: true })
  stripeSubscriptionId: string;

  @Column({ nullable: true, default: false })
  isPremium: boolean;

  @Index()
  @Allow()
  @ManyToOne(() => Plan, {
    eager: true,
  })
  plan: Plan;

  @BeforeInsert()
  @BeforeUpdate()
  public setToPremium(): void {
    if (this.price >= 10000) {
      this.isPremium = true;
    }
  }

  @Index()
  @Column({ nullable: true })
  stripeSubscriptionStatus: string;

  @Allow()
  @ManyToOne(() => Keyword, {
    eager: true,
  })
  keyword: Keyword;

  @Column({ nullable: true })
  duration: string;

  @Column({ type: 'decimal', nullable: true })
  price: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
