import React, { useState, useEffect, FormEvent } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { Header, Form } from './styles';
import { FiChevronLeft } from 'react-icons/fi';

import logo from '../../assets/logo.png';
import api from '../../services/api';

interface OrdemParams {
  id: string;
}

interface Ordem {
  base_id: string;
  base: string;
  estado: string;
  consumo: number;
}

interface Polo {
  id: string;
  base: string;
}

const NovaOrdem:React.FC =() => {
  const { params } = useRouteMatch<OrdemParams>();
  const [polo, setPolo] = useState<Polo | null>(null);
  
  const [base_id, setBase_id] = useState('');
  const [base, setBase] = useState('');
  const [estado, setEstado] = useState('');
  const [consumo, setConsumo] = useState('');

  useEffect(() => {
    api.get(`polos/${params.id}`).then(response => {
      setPolo(response.data);
    });
  }, [params.id]);

  async function adicionaNovaOrdemDeServico(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await api.post('ordens-de-servico');
    console.log(response.data);

  }

  return(
    <>
      <Header>
        <img src={logo} className="logo" alt="logo Stone Pagamentos"/>
        <Link to="/">
          <FiChevronLeft size={16} />
          voltar
        </Link>
      </Header>
      <Form onSubmit={adicionaNovaOrdemDeServico}>

        <input 
          value={params.id} 
          onChange={e => setBase_id(e.target.value)}
          readOnly/>

        <input 
          value={polo?.base} 
          onChange={e => setBase(e.target.value)}
          readOnly/>

        <input 
          value={estado} 
          onChange={e => setEstado(e.target.value)}
          placeholder="Informe o estado"/>

        <input 
          value={consumo} 
          onChange={e => setConsumo(e.target.value)}
          placeholder="Informe a quantidade de terminais"/>

        <button className="btn" type="submit">SALVAR</button>
      </Form>
    </>
  );
};

export default NovaOrdem;