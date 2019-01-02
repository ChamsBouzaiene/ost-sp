import { StatelessComponent } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Register from "./components/Register";
import verify from "./components/VerfiyEmail";
import EmailValidation from "./components/EmailValidation";
import Forgotmypassword from "../auth/components/Forgotmypassword";
import * as React from "react";
import Auth from "../../front/auth/components/Auth";

const redirectToAuth = () => <Redirect to="/auth" />;

const AuthRoutes: StatelessComponent = () => (
  <Switch>
    <Route exact={true} path="/auth/register" component={Register} />
    <Route exact={true} path="/auth/verify" component={verify} />
    <Route exact={true} path="/auth/validate" component={EmailValidation} />
    <Route exact={true} path="/auth/forgot" component={Forgotmypassword} />
    <Route exact={true} path="/auth" component={Auth} />

    <Route render={redirectToAuth} />
  </Switch>
);

export default AuthRoutes;
