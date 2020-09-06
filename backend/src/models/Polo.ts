import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import OrdemDeServico from './OrdemDeServico';

@Entity('polos')
class Polo {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  base: string;

  @Column('integer')
  estoque: number;

  @OneToMany(type => OrdemDeServico, ordem => ordem.base)
  ordens: OrdemDeServico[];

}

export default Polo;