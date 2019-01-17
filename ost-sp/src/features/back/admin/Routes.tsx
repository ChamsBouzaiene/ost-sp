import { StatelessComponent } from "react";
import { Route, Switch } from "react-router-dom";
//import Admins from "./componenets/AdminsContainer";
import * as React from "react";
import List from "../entity/components/List";
import { Admin } from "src/data/Admin";

const AdminsRoutes: StatelessComponent = () => (
  <Switch>
    <Route
      exact={true}
      path="/admin/admins"
      render={() => <List entity={"admins"} schema={Admin} />}
    />
  </Switch>
);

export default AdminsRoutes;
