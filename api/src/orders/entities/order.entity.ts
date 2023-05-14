import { Allow } from 'class-validator';
import { User } from 'src/users/entities/user.entity';
import { EntityHelper } from 'src/utils/entity-helper';
import { Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: string;

  @Index()
  @Allow()
  @ManyToOne(() => User, {
    eager: true,
  })
  user: User;
}
