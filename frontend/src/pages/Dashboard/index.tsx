import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Polos } from './styles';

import logo from '../../assets/logo.png';
import api from '../../services/api';

interface Polo {
  id: string;
  base: string;
  estoque: number;
  situacao: string;
}

const Dashboard:React.FC = () => {

  const [polos, setPolos] = useState<Polo[]>([]);

  useEffect(() => {
    api.get('polos').then(response => {
      setPolos(response.data);
    })
  }, []);
  
  return( 
    <>
      <img src={logo} className="logo" alt="logo Stone Pagamentos" />
      <Title>Ajude os nossos Green Angels</Title>

      <Polos>
        {polos.map(polo => (        
          <Link key={polo.id} to={`/polo/${polo.id}`}>
            <div>
              <strong>{polo.base}</strong>
            </div>
            <strong>{polo.estoque} terminais</strong>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Polos>
    </> 
  );
};

export default Dashboard;