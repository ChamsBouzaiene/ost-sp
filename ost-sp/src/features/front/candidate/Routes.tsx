import { StatelessComponent } from "react";
import { Route, Switch } from "react-router-dom";

import * as React from "react";
import Profile from "../../front/candidate/components/Profile";
import IProfileCredentials from "../../../data/ProfileCredential";
import { API_URL } from "src/data/Api";
import Axios from "axios";

export const updateOne = (profile: IProfileCredentials, id: number) =>
  Axios.patch(`${API_URL}/candidates/${id}`, profile).then(res => res.data);

const AuthRoutes: StatelessComponent = () => (
  <Switch>
    <Route
      exact={true}
      path="/profile"
      render={() => <Profile onSubmit={value => console.log(value)} />}
    />
  </Switch>
);

export default AuthRoutes;
