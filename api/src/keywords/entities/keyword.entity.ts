import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';
import { EntityHelper } from 'src/utils/entity-helper';
import { Allow } from 'class-validator';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Keyword extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  letters: string;

  @Column()
  slug: string;

  @Column()
  featured: boolean;

  @Index()
  @Allow()
  @ManyToOne(() => User, {
    eager: true,
  })
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
