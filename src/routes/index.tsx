import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login/Index';
import Inicio from '../pages/Inicio/Index';
import AddTicket from '../pages/AddTicket/Index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/inicio" component={Inicio} />
    <Route path="/addTicket" component={AddTicket} />
  </Switch>
)

export default Routes;
