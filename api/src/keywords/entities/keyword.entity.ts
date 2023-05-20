import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Index,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import { EntityHelper } from 'src/utils/entity-helper';
import { Allow } from 'class-validator';
import { User } from 'src/users/entities/user.entity';
import slugify from 'slugify';
import { Exclude } from 'class-transformer';

@Entity()
export class Keyword extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: String, unique: true })
  letters: string;

  @Column({ type: String, unique: true })
  slug?: string;

  @BeforeInsert()
  @BeforeUpdate()
  setKeywordSlug() {
    this.slug = slugify(this.letters, { lower: true, strict: true });
  }

  @Column({ default: false })
  featured: boolean;

  @Column({ nullable: true })
  sublink: string;

  @Column({ type: 'jsonb', nullable: true })
  location?: {
    state: string;
    country: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };

  @Column({ default: 0 })
  price: number;

  @Index()
  @Column({ default: false })
  isPremium: boolean;

  @Index()
  @Allow()
  @ManyToOne(() => User, {
    eager: true,
  })
  @Exclude({ toPlainOnly: true })
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
