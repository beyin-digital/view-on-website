import { EntityHelper } from 'src/utils/entity-helper';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Currency extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  currency: string;

  @Column({ nullable: true })
  name?: string;
}
