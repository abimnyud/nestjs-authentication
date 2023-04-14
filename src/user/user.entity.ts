import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false, length: 64 })
  name: string;

  @Column({ type: 'varchar', nullable: false, length: 64, unique: true })
  email: string;

  @Column({ type: 'varchar', select: false, nullable: false })
  password: string;
}
