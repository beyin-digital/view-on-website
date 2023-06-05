import { Keyword } from 'src/keywords/entities/keyword.entity';
import { EntityHelper } from 'src/utils/entity-helper';
import {
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class KeywordViewCount extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @ManyToOne(() => Keyword, {
    eager: true,
    onDelete: 'CASCADE',
  })
  keyword: Keyword;

  @Index()
  @CreateDateColumn()
  createdAt: Date;
}
