import { Exclude } from 'class-transformer';
import { User } from 'src/users/entities/user.entity';
import { EntityHelper } from 'src/utils/entity-helper';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Otp extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: String, nullable: true })
  token: string | null;

  @ManyToOne(() => User, {
    eager: true,
  })
  @Exclude({ toPlainOnly: true })
  user?: User;

  @CreateDateColumn()
  createdAt: Date;

  @Column({
    nullable: true,
  })
  expiredAt: Date;

  @BeforeInsert()
  setExpiredAtAndGenerateToken() {
    this.expiredAt = new Date(Date.now() + 1000 * 60 * 5);
    // Generate 6 random digit number
    this.token = Math.floor(100000 + Math.random() * 900000).toString();
  }

  @Column({ default: false })
  used: boolean;

  @Column({ nullable: true })
  usedAt: Date;
}
