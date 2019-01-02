import { StatelessComponent } from "react";
import { Route, Switch } from "react-router-dom";

import * as React from "react";
import Profile from "../../front/candidate/components/Profile";

const ProfileRoutes: StatelessComponent = () => (
  <Switch>
    <Route exact={true} path="/profile" component={Profile} />
  </Switch>
);

export default ProfileRoutes;
