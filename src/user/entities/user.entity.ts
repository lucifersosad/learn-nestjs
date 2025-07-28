import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { uuidv7 } from 'uuidv7';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuidv7();

  @Column({
    type: 'varchar',
    length: 255,
  })
  full_name: string | null;

  @Column({
    type: 'varchar',
    length: 255,
  })
  email: string | null;

  @Column({
    type: 'varchar',
    length: 255,
    unique: true,
  })
  phone: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  password: string;
}
