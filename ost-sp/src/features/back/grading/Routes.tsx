import { StatelessComponent } from "react";
import { Route, Switch } from "react-router-dom";
import GradingDashboard from "./componenets/GradesContainer";
import * as React from "react";

const GradesRoutes: StatelessComponent = () => (
  <Switch>
    <Route exact={true} path="/admin/grades" component={GradingDashboard} />
  </Switch>
);

export default GradesRoutes;
