import { StatelessComponent } from "react";
import { Route, Switch } from "react-router-dom";
import UnassignedDashboard from "./componenets/UnassignedContainer";
import * as React from "react";

const SelectorRoutes: StatelessComponent = () => (
  <Switch>
    <Route
      exact={true}
      path="/admin/unassigned"
      component={UnassignedDashboard}
    />
  </Switch>
);

export default SelectorRoutes;
