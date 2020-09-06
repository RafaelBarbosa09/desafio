import BuscaOrdemPorBaseService from "./BuscaOrdemPorBaseService";

interface RequestDTO {
  base: string;
}

class RetornaCoberturaPorPeriodoService {
  /*
    Esse método deve retornar o cálculo da cobertura em dias 
   */
  public async calculaCoberturaPorperiodo({base}: RequestDTO): Promise<number> {

    const ordemDeServicoPorBase = new BuscaOrdemPorBaseService();
    const ordensDeServico = await ordemDeServicoPorBase.buscaOrdemDeServicoPorBase({ base });

    let consumoTotal = 0;
    let estoque = 0;
    let cobertura = 0;
    
    ordensDeServico.forEach(ordem => {
      let consumoPorOrdem = ordem.consumo;
      estoque = ordem.base.estoque;
      consumoTotal += consumoPorOrdem;
    });
    
    cobertura = estoque / consumoTotal;

    return Math.trunc(cobertura);
  }
}

export default RetornaCoberturaPorPeriodoService;