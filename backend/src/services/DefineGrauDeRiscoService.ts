import RetornaCoberturaPorPeriodoService from "./RetornaCoberturaPorPeriodoService";

interface RequestDTO {
  base: string;
}

class DefineGrauDeRiscoService {
   /*
    Esse método deve retornar o o grau de risco em que o polo se encontra
   */
  public async retornaGrauDeRisco({base}: RequestDTO): Promise<string> {

    const coberturaService = new RetornaCoberturaPorPeriodoService();
    let cobertura = await coberturaService.calculaCoberturaPorperiodo({ base });

    let grauDeRisco = '';

    if(cobertura < 10) {
      grauDeRisco = `PERIGO! Cobertura em ${cobertura} dias.`;
    } else if(cobertura >= 10 && cobertura <= 13) {
      grauDeRisco = `ATENÇÃO! Cobertura em ${cobertura} dias.`;
      console.log('entrei aqui')
    } else if(cobertura >= 14 && cobertura <= 18) {
      grauDeRisco = `COBERTURA IDEAL! Cobertura em ${cobertura} dias.`;
    } else if(cobertura >= 19 && cobertura <= 23) {
      grauDeRisco = `ATENÇÃO! Cobertura em ${cobertura} dias.`;
    } else {
      grauDeRisco = `PERIGO! Cobertura em ${cobertura} dias.`;
    }


    return grauDeRisco;
  }
}

export default DefineGrauDeRiscoService;