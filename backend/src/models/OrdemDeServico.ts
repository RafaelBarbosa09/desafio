import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

import Polo from '../models/Polo';

@Entity('ordensDeServico')
class OrdemDeServico {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  data: Date;

  @Column()
  base_id: string;

  // @ManyToOne(() => Polo)
  // @JoinColumn({ name: 'base_id' })
  // base: Polo;
  @JoinColumn({ name: 'base_id' })
  @ManyToOne(type => Polo, polo => polo.ordens)
  base: Polo;

  @Column()
  estado: string;

  @Column()
  consumo: number;

}

export default OrdemDeServico;