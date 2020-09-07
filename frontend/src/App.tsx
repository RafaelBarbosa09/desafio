import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import EstiloGlobal from './styles/global'; 

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <EstiloGlobal/>
  </>
);

export default App;
