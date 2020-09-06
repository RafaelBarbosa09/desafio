import { getCustomRepository } from "typeorm";

import OrdemDeServicoRepository from "../repositories/OrdemDeServicoRepository";
import OrdemDeServico from "../models/OrdemDeServico";
import DiferencaEntreDatasService from "./DiferencaEntreDatasService";

interface RequestDTO {
  base: string;
}

class BuscaOrdemPorBaseService {
    /*
    Esse método deve retornar uma ordem de serviço pela base
   */
  public async buscaOrdemDeServicoPorBase({ base }: RequestDTO): Promise<OrdemDeServico[]> {

    const ordemDeServicoRepository = getCustomRepository(OrdemDeServicoRepository);
    var ordensDeServico = await ordemDeServicoRepository.buscaPorBase({ base });

    const informaPeriodo = new DiferencaEntreDatasService();
    let periodo = 0;

    for (let i = 0; i < ordensDeServico.length; i++) {
      periodo = informaPeriodo.diferencaEntreDatas(ordensDeServico);
      if(periodo > 181) {
        ordensDeServico.pop();
      }
    }
    
    return ordensDeServico;
  }

}

export default BuscaOrdemPorBaseService;