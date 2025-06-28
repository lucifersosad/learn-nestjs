import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

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
