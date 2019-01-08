import { StatelessComponent } from "react";
import { Route, Switch } from "react-router-dom";
import SelectorDashboard from "./componenets/SelectorsContainer";
import * as React from "react";

const SelectorRoutes: StatelessComponent = () => (
  <Switch>
    <Route exact={true} path="/admin/selectors" component={SelectorDashboard} />
  </Switch>
);

export default SelectorRoutes;
