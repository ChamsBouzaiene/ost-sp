import { StatelessComponent } from "react";
import { Route, Switch } from "react-router-dom";

import * as React from "react";
import Application from "../../front/application/components/Application";

const ApplicationRoutes: StatelessComponent = () => (
  <Switch>
    <Route exact={true} path="/application" component={Application} />
  </Switch>
);

export default ApplicationRoutes;
