import { StatelessComponent } from "react";
import { Route, Switch } from "react-router-dom";
import SelectionDashboard from "./componenets/SelectionContainer";
import * as React from "react";

const SelectionRoutes: StatelessComponent = () => (
  <Switch>
    <Route
      exact={true}
      path="/admin/selection"
      component={SelectionDashboard}
    />
  </Switch>
);

export default SelectionRoutes;
