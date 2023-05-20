import { EntityHelper } from 'src/utils/entity-helper';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Otp extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;
}
