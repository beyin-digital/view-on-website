import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BeforeInsert,
  OneToOne,
} from 'typeorm';
import { EntityHelper } from 'src/utils/entity-helper';
import { User } from 'src/users/entities/user.entity';
import { Allow } from 'class-validator';
import { Subscription } from 'src/subscriptions/entities/subscription.entity';

@Entity()
export class Keyword extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  letters: string;

  @Column()
  slug: string;

  @Column({ nullable: true })
  sublink: string;

  @Column({ nullable: true })
  state: string;

  @Column({ nullable: true })
  country: string;

  @Column({ nullable: true })
  organisation: string;

  @BeforeInsert()
  setSlug() {
    this.slug = this.letters.toLowerCase().replace(/ /g, '-');
  }

  @Allow()
  @ManyToOne(() => User, {
    eager: true,
  })
  user: User;

  @OneToOne(() => Subscription, (subscription) => subscription.keyword, {
    eager: true,
  })
  subscription: Subscription;

  @Column({ nullable: true })
  purchaseDate: Date;

  @Column({ nullable: true })
  renewalDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
