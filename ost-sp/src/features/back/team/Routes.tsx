import { StatelessComponent } from "react";
import { Route, Switch } from "react-router-dom";
import TeamDashboard from "./componenets/TeamContainer";
import * as React from "react";

const TeamRoutes: StatelessComponent = () => (
  <Switch>
    <Route exact={true} path="/admin/team" component={TeamDashboard} />
  </Switch>
);

export default TeamRoutes;
