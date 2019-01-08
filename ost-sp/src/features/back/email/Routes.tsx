import { StatelessComponent } from "react";
import { Route, Switch } from "react-router-dom";
import EmailtDashboard from "./componenets/EmailsContainer";
import * as React from "react";

const EmailsRoutes: StatelessComponent = () => (
  <Switch>
    <Route exact={true} path="/admin/emails" component={EmailtDashboard} />
  </Switch>
);

export default EmailsRoutes;
