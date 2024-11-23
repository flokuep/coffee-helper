import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bean {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  manufacturer: string;

  @Column()
  profile: string;

  @Column()
  notes: string;
}
