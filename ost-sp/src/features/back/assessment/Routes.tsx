import { StatelessComponent } from "react";
import { Route, Switch } from "react-router-dom";
import AssmentDashboard from "./componenets/AssmessmentsContainer";
import * as React from "react";

const AssessmentsRoutes: StatelessComponent = () => (
  <Switch>
    <Route
      exact={true}
      path="/admin/assessments"
      component={AssmentDashboard}
    />
  </Switch>
);

export default AssessmentsRoutes;
