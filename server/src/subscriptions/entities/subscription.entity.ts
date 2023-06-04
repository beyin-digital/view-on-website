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

@Entity()
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

  @Column({ nullable: true })
  invoiceId: string;

  @Column({ nullable: true, default: false })
  isPremium: boolean;

  @BeforeInsert()
  @BeforeUpdate()
  public setToPremium(): void {
    if (this.purchaseAmount >= 10000) {
      this.isPremium = true;
    }
  }

  @Index()
  @Column({ nullable: true, default: 'active' })
  stripeSubscriptionStatus: string;

  @Allow()
  @ManyToOne(() => Keyword)
  keyword: Keyword;

  @Column({ nullable: true })
  duration: string;

  @Column({ type: 'decimal', nullable: true })
  purchaseAmount: number;

  @Column({ type: 'decimal', nullable: true })
  renewalAmount: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
