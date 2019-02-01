import * as React from "react";
import { StatelessComponent } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFound from "../../../shared/components/NotFound";
import MainDashboard from "../../back/home/components/MainDashboard";
import AuthRoutes from "../../front/register/Routes";
import Home from "../../front/home/components/Home";
import ProfileRoutes from "../../front/candidate/Routes";
import ApplicationRoutes from "../../front/application/Routes";
import TeamRoutes from "../../front/teamApplication/Routes";

const redirectTo404 = () => <Redirect to="/404" />;

const Routes: StatelessComponent = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route path="/auth" component={AuthRoutes} />
    <Route path="/profile" component={ProfileRoutes} />
    <Route path="/application" component={ApplicationRoutes} />
    <Route path="/team-application" component={TeamRoutes} />
    <Route path="/admin" component={MainDashboard} />
    <Route path="/404" component={NotFound} />
    <Route render={redirectTo404} />
  </Switch>
);

export default Routes;
