import { Router } from 'express';

import CriarOrdemDeServicoService from '../services/CriarOrdemDeServicoService';
import { getCustomRepository } from 'typeorm';
import OrdemDeServicoRepository from '../repositories/OrdemDeServicoRepository';
import BuscaOrdemPorBaseService from '../services/BuscaOrdemPorBaseService';

const ordensRouter = Router();

/*
  Essa rota deve retornar todas as ordens de serviço cadastradas
  */
ordensRouter.get('/', async (request, response) => {
  const ordemDeServicoRepository = getCustomRepository(OrdemDeServicoRepository);
  const ordensDeServicoEncontradas = await ordemDeServicoRepository.find();

  return response.json(ordensDeServicoEncontradas);
});

/*
  Essa rota deve criar uma ordem de serviço
  */
ordensRouter.post('/', async (request, response) => {
  try {
    const { data, base_id, estado, consumo } = request.body;
    const criarOrdemDeServico = new CriarOrdemDeServicoService();

    const ordemDeServico = await criarOrdemDeServico.execute({ 
      data: new Date(),
      base_id,
      estado,
      consumo,
     });

    return response.json(ordemDeServico);
  } catch (error) {
    return response.status(400).json({error: error.message});
  }
});

/*
  Essa rota deve retornar as ordens de serviço de acordo com o id do polo
  */
ordensRouter.get('/busca-por-base/:base', async (request, response) => {

  const { base } = request.params;

  const ordemDeServicoPorBase = new BuscaOrdemPorBaseService();

  const ordensDeServico = await ordemDeServicoPorBase.buscaOrdemDeServicoPorBase({ base });

  return response.json(ordensDeServico);
});

export default ordensRouter;