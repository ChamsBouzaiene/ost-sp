import { StatelessComponent } from "react";
import { Route, Switch } from "react-router-dom";

import * as React from "react";
import ApplicationContainer from "../../front/application/components/ApplicationContainer";
import Confirmed from "../../front/application/components/Confirmed";

const ApplicationRoutes: StatelessComponent = () => (
  <Switch>
    <Route exact={true} path="/application" component={ApplicationContainer} />
    <Route exact={true} path="/application/confirmed" component={Confirmed} />
  </Switch>
);

export default ApplicationRoutes;
