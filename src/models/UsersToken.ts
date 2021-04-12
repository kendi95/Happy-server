import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('users-token')
export default class UsersToken {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  token: string;

  @Column()
  code: string;

  @Column()
  used: boolean;
}