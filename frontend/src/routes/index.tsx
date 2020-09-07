import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Polo from '../pages/Polo';
import NovaOrdem from '../pages/NovaOrdem';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard}/>
    <Route path="/polo/:id+" component={Polo}/>
    <Route path="/nova-ordem/:id+" component={NovaOrdem}/>
  </Switch>
);

export default Routes;