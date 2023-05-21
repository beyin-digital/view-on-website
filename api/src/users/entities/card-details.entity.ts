import { EntityHelper } from 'src/utils/entity-helper';
import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

export class CaredDetails extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  last4: string;

  @Column()
  stripeCustomerId: string;

  @Column()
  stripeEmail: string;

  @Column()
  expirationMonth: number;

  @Column()
  expirationYear: number;

  @Column()
  country: string;

  @Column()
  cardBrand: string;

  @Column()
  cardId: string;

  @ManyToOne(() => User, {
    eager: true,
  })
  user: User;
}
