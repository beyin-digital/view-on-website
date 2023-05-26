import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Index,
  OneToMany,
  BeforeUpdate,
  BeforeInsert,
} from 'typeorm';
import { EntityHelper } from 'src/utils/entity-helper';
import { Allow } from 'class-validator';
import { User } from 'src/users/entities/user.entity';
import slugify from 'slugify';
import { Exclude } from 'class-transformer';
import { KeywordViewCount } from 'src/analytics/entities/keyword-count.entity';
import { Subscription } from 'src/subscriptions/entities/subscription.entity';

@Entity()
export class Keyword extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  letters: string;

  @Column()
  slug: string;

  @BeforeInsert()
  public createSlug(): void {
    if (this.letters) {
      this.slug = slugify(this.letters, {
        lower: true,
      });
    }
  }

  @Column({ default: false })
  featured: boolean;

  @Column({ nullable: true })
  sublink: string;

  @Column({ type: 'jsonb', nullable: true })
  location?: {
    state: string;
    country: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };

  @Column({ default: 0 })
  price: number;

  @BeforeInsert()
  @BeforeUpdate()
  public setToPremium(): void {
    if (
      this.price === 10000 ||
      this.price === 100000 ||
      this.price === 999999
    ) {
      this.isPremium = true;
    }
  }

  @Column({ nullable: true })
  organisation: string;

  @Index()
  @Column({ default: false })
  isPremium: boolean;

  @Index()
  @Allow()
  @ManyToOne(() => User, {
    eager: true,
  })
  @Exclude({ toPlainOnly: true })
  user?: User;

  @Allow()
  @OneToMany(
    () => KeywordViewCount,
    (keywordViewCount) => keywordViewCount.keyword,
    { nullable: true },
  )
  keywordViewCount?: KeywordViewCount[];

  @Allow()
  @OneToMany(() => Subscription, (Subscription) => Subscription.keyword, {
    nullable: true,
  })
  subscription?: Subscription;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
