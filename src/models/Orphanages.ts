import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, OneToOne} from 'typeorm';
import Images from './Images';

@Entity('orphanages')
export default class Orphanages {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  latitude: number;
  
  @Column()
  longitude: number;
  
  @Column()
  about: string;
  
  @Column()
  whatsapp: string;

  @Column()
  telephone: string;
  
  @Column()
  instructions: string;
  
  @Column()
  opening_hours: string;
  
  @Column()
  open_on_weekends: boolean;

  @Column()
  status: string;

  @OneToMany(() => Images, image => image.orphanage, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({name: 'orphanage_id'})
  images: Images[];
}