import Polo from '../models/Polo';
import PoloRepository from '../repositories/PoloRepository';
import { getCustomRepository } from 'typeorm';

interface RequestDTO {
  base: string;
  estoque: number;
}

class CriarPoloService {
    /*
    Esse método deve criar um novo polo
   */
  public async execute({base, estoque}: RequestDTO): Promise<Polo> {
    const polosRepository = getCustomRepository(PoloRepository);

    const poloEncontrado = await polosRepository.buscaPorBase(base);

    const polo = polosRepository.create({
      base,
      estoque,
    });

    await polosRepository.save(polo);

    return polo;
  }
}

export default CriarPoloService;