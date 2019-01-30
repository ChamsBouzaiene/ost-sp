import { StatelessComponent } from "react";
import { Route, Switch } from "react-router-dom";

import * as React from "react";
import Profile from "../../front/candidate/components/Profile";
import MoreInfo from "../../front/candidate/components/MoreInfo";
import VideoStep from "../../front/candidate/components/VideoStep";

const ProfileRoutes: StatelessComponent = () => (
  <Switch>
    <Route exact={true} path="/profile" component={Profile} />
    <Route exact={true} path="/profile/more-info" component={MoreInfo} />
    <Route exact={true} path="/profile/video" component={VideoStep} />
  </Switch>
);

export default ProfileRoutes;
