import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.png';
import api from '../../services/api';

import { Header, PoloInfo, OrdensDeServico, AdicionaOrdem } from './styles';

interface PoloParams {
  id: string;
}

interface Polo {
  id: string;
  base: string;
  estoque: number;
}

interface Ordem {
  id: string;
  data: Date;
  base_id: string;
  estado: string;
  consumo: number;
}

interface Cobertura {
  cobertura: string;
}

interface GrauDeRisco {
  grauDeRisco: string
}

const Polo:React.FC = () => {
  const { params } = useRouteMatch<PoloParams>();

  const [polo, setPolo] = useState<Polo | null>(null);
  const [cobertura, setCobertura] = useState<Cobertura | null>(null);
  const [grauDeRisco, setGrauDeRisco] = useState<GrauDeRisco | null>(null);
  const [ordens, setOrdens] = useState<Ordem[]>([]);

  useEffect(() => {
    api.get(`polos/${params.id}`).then(response => {
      setPolo(response.data);
    });
    
    api.get(`ordens-de-servico/busca-por-base/${params.id}`).then(response => {
      setOrdens(response.data);
    });

    api.get(`polos/cobertura/${params.id}`).then(response => {
      console.log(response.data)
      setCobertura(response.data);
    });

    api.get(`polos/grau-de-risco/${params.id}`).then(response => {
      console.log(response.data)
      setGrauDeRisco(response.data);
    });

  }, [params.id]);

  return (
    // <h1>Polo {params.id}</h1>
    <>
      <Header>
        <img src={logo} className="logo" alt="logo Stone Pagamentos"/>
        <Link to="/">
          <FiChevronLeft size={16} />
          voltar
        </Link>
      </Header>

      <PoloInfo>
        <header>
          <div>   
            <strong>{polo?.base}</strong>
            <p>Ordens de serviço do polo nos últimos 6 meses</p>
            <p>{grauDeRisco?.grauDeRisco}</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>8</strong>
            <span>Ordens de serviço</span>
          </li>

          <li>
            <strong>{polo?.estoque}</strong>
            <span>Terminais</span>
          </li>

          <li>
            <strong>{cobertura?.cobertura}</strong>
            <span>Dias de cobertura</span>
          </li>
        </ul>

        <AdicionaOrdem>
          <Link className="novo" to="teste">
            Nova OS
          </Link>
        </AdicionaOrdem>

      </PoloInfo>

      <OrdensDeServico>
        {ordens.map(ordem => (  
          <Link key={ordem.id} to={`/ordens-de-servico/${ordem.id}`}>
            <div>
              <strong>{ordem.estado}</strong>
              <p>{ordem.data}</p>
            </div>
            <strong>{ordem.consumo} terminais</strong>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </OrdensDeServico>
    </>
  );
};

export default Polo;