import { StatelessComponent } from "react";
import { Route, Switch } from "react-router-dom";

import * as React from "react";
import ApplicationContainer from "../../front/teamApplication/components/ApplicationContainer";
import Confirmed from "../../front/teamApplication/components/Confirmed";

const ApplicationRoutes: StatelessComponent = () => (
  <Switch>
    <Route
      exact={true}
      path="/team-application"
      component={ApplicationContainer}
    />
    <Route
      exact={true}
      path="/team-application/confirmed"
      component={Confirmed}
    />
  </Switch>
);

export default ApplicationRoutes;
