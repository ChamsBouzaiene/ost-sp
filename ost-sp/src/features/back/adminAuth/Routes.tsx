import { StatelessComponent } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "./components/Auth";
import * as React from "react";

const AuthRoutes: StatelessComponent = () => (
  <Switch>
    <Route exact={true} path="/admin/login" component={Auth} />
  </Switch>
);

export default AuthRoutes;
