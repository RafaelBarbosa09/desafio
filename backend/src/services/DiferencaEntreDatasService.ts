import OrdemDeServico from "../models/OrdemDeServico";

class DiferencaEntreDatasService {
    /*
    Esse método deve retornar a diferença entre duas datas em dias
   */
  public diferencaEntreDatas(ordensDeServico: OrdemDeServico[]): number {

    const arrayDeDataMaior = [];
    const arrayDeDataMenor = [];
    let consumo = 0;

    for (let i = 0; i < ordensDeServico.length; i++) {
      const element = ordensDeServico[i];

      arrayDeDataMaior.push(ordensDeServico[0].data);
      arrayDeDataMenor.push(ordensDeServico[ordensDeServico.length-1].data);
      let terminal = element.consumo;
      consumo+= terminal;

    }

    const dataMaior = arrayDeDataMaior[0];
    const dataMenor = arrayDeDataMenor[0];

    var diaMaior = dataMaior.getDate();
    var mesMaior = dataMaior.getMonth() + 1;
    var anoMaior = dataMaior.getFullYear();

    var diaMenor = dataMenor.getDate();
    var mesMenor = dataMenor.getMonth() + 1;
    var anoMenor = dataMenor.getFullYear();
    let periodo = ((diaMaior - diaMenor) * -1) - ((mesMaior - mesMenor) * -1) * 30 + ((anoMaior - anoMenor) * -1) * 360;

    // console.log('menor -> ' + diaMenor, mesMenor, anoMenor);
    // console.log('maior -> ' + diaMaior, mesMaior, anoMaior);
    // console.log(`dataMaior -> ${dataMaior}`);
    // console.log(`dataMenor -> ${dataMenor}`);
    // console.log(`periodo -> ${periodo} dias`);
    // console.log(`consumo de consumo -> ${consumo}`);

    return periodo;
  }
}

export default DiferencaEntreDatasService;