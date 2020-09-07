import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Polo from '../pages/Polo';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard}/>
    <Route path="/polo/:id+" component={Polo}/>
    {/* :id */}
  </Switch>
);

export default Routes;