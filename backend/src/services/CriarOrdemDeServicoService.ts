import { getCustomRepository } from 'typeorm';

import OrdemDeServico from '../models/OrdemDeServico';
import OrdemDeServicoRepository from '../repositories/OrdemDeServicoRepository';
import PoloRepository from '../repositories/PoloRepository';

interface RequestDTO {
  data: Date;
  base_id: string;
  estado: string;
  consumo: number;
}

class CriarOrdemDeServicoService {
    /*
    Esse método deve criar uma nova ordem de serviço
   */
  public async execute({ data, base_id, estado, consumo }: RequestDTO): Promise<OrdemDeServico> {
    const ordemDeServicoRepository = getCustomRepository(OrdemDeServicoRepository);
    const poloRepository = getCustomRepository(PoloRepository);

    const poloEncontrado = await poloRepository.findOne(base_id);

    if(!poloEncontrado) {
      throw new Error('Polo não cadastrado.')
    }

    const ordemDeServico = ordemDeServicoRepository.create({
      data,
      base_id,
      estado,
      consumo,
    });

    poloEncontrado.estoque += ordemDeServico.consumo;    

    ordemDeServico.base = poloEncontrado;

    ordemDeServicoRepository.save(ordemDeServico);
    poloRepository.save(poloEncontrado);

    return ordemDeServico;
  }
}

export default CriarOrdemDeServicoService;