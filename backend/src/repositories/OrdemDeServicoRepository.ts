import { EntityRepository, Repository, getRepository } from "typeorm";

import OrdemDeServico from '../models/OrdemDeServico';

interface RequestDTO {
  base: string;
}

@EntityRepository(OrdemDeServico)
class OrdemDeServicoRepository extends Repository<OrdemDeServico> {
  
  public async buscaPorBase({ base }: RequestDTO): Promise<OrdemDeServico[]> {

    const ordensDeServico = await getRepository(OrdemDeServico)
    .createQueryBuilder("ordem")
    .leftJoinAndSelect("ordem.base", "polo")
    .orderBy("ordem.data", "DESC")
    .where("ordem.base_id = :base", { base: base })
    .getMany();

    return ordensDeServico;
  }
}

export default OrdemDeServicoRepository;