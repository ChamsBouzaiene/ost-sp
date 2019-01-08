import { StatelessComponent } from "react";
import { Route, Switch } from "react-router-dom";
import AlumniDashboard from "./componenets/AlumnisContainer";
import * as React from "react";

const EmailsRoutes: StatelessComponent = () => (
  <Switch>
    <Route exact={true} path="/admin/alumnis" component={AlumniDashboard} />
  </Switch>
);

export default EmailsRoutes;
