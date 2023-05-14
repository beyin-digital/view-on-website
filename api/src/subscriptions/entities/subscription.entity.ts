import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Allow } from 'class-validator';
import { Keyword } from 'src/keywords/entities/keyword.entity';
import { User } from 'src/users/entities/user.entity';
import { EntityHelper } from 'src/utils/entity-helper';

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

  @Allow()
  @OneToOne(() => Keyword, {
    eager: true,
  })
  keyword: Keyword;

  @Index()
  @Column({ nullable: true })
  purchaseDate: Date;

  @Index()
  @Column({ nullable: true })
  renewalDate: Date;

  @Column({ nullable: true })
  subscriptionId: string;

  @Index()
  @Column({ nullable: true })
  subscriptionStatus: string;

  @Column({ nullable: true })
  price: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
