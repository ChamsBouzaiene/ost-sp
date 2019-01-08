import { StatelessComponent } from "react";
import { Route, Switch } from "react-router-dom";
import MainDashboard from "./componenets/Main";
import * as React from "react";

const MainRoutes: StatelessComponent = () => (
  <Switch>
    <Route exact={true} path="/admin" component={MainDashboard} />
  </Switch>
);

export default MainRoutes;
