import { Keyword } from 'src/keywords/entities/keyword.entity';
import { EntityHelper } from 'src/utils/entity-helper';
import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class KeywordViewCount extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Keyword, {
    eager: true,
  })
  keyword: Keyword;

  @CreateDateColumn()
  createdAt: Date;
}
