import { EntityRepository, Repository } from "typeorm";

import Polo from "../models/Polo";

@EntityRepository(Polo)
class PoloRepository extends Repository<Polo> {
  
  public async buscaPorBase(base: string): Promise<Polo | null> {

    const poloEncontrado = await this.findOne({where: {base}});

    return poloEncontrado || null;
  }
}

export default PoloRepository;