import { StatelessComponent } from "react";
import { Route, Switch } from "react-router-dom";
import Admins from "./componenets/AdminsContainer";
import * as React from "react";

const AdminsRoutes: StatelessComponent = () => (
  <Switch>
    <Route exact={true} path="/admin/admins" component={Admins} />
  </Switch>
);

export default AdminsRoutes;
