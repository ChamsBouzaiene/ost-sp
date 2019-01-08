import { StatelessComponent } from "react";
import { Route, Switch } from "react-router-dom";
import applicationDashboard from "./componenets/Applications";
import * as React from "react";

const applicationsRoutes: StatelessComponent = () => (
  <Switch>
    <Route
      exact={true}
      path="/admin/applications"
      component={applicationDashboard}
    />
  </Switch>
);

export default applicationsRoutes;
