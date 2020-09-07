import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import CriarPoloService from '../services/CriarPoloService';
import PoloRepository from '../repositories/PoloRepository';
import DefineGrauDeRiscoService from '../services/DefineGrauDeRiscoService';
import RetornaCoberturaPorPeriodoService from '../services/RetornaCoberturaPorPeriodoService';

const polosRouter = Router();

/*
  Essa rota deve todos os polos cadastrados
*/
polosRouter.get('/', async (request, response) => {
  const poloRepository = getCustomRepository(PoloRepository);
  const polos = await poloRepository.find();
  return response.json(polos);
});

/*
  Essa rota deve todos o polo pelo id
*/
polosRouter.get('/:id', async (request, response) => {
  const { id } = request.params;

  const poloRepository = getCustomRepository(PoloRepository);
  const polo = await poloRepository.findOne({id});
  return response.json(polo);
});

/*
  Essa rota deve criar novos polos
*/
polosRouter.post('/', async (request, response) => {
  try {
    const { base, estoque } = request.body;
    const criarPolo = new CriarPoloService();
    const polo = await criarPolo.execute({base, estoque});

    return response.json(polo);
  } catch (error) {
    return response.status(400).json({error: error.message});
  }
});

/*
  Essa rota deve retornar o cálculo da cobertura em dias 
  */
 polosRouter.get('/cobertura/:base', async (request, response) => {

  const { base } = request.params;

  const retornaCobertura = new RetornaCoberturaPorPeriodoService(); 

  const cobertura = await retornaCobertura.calculaCoberturaPorperiodo({base});

  return response.json(cobertura);
});

/*
  Essa rota deve retornar o grau de risco em que o polo se encontra
*/
polosRouter.get('/grau-de-risco/:base', async (request, response) => {

  const { base } = request.params;

  const grauDeRiscoService = new DefineGrauDeRiscoService();
  const grauDeRisco = await grauDeRiscoService.retornaGrauDeRisco({base});

  return response.json(grauDeRisco);
});

export default polosRouter;