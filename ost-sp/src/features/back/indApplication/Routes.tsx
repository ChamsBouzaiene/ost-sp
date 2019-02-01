import { StatelessComponent } from "react";
import { Route, Switch } from "react-router-dom";
//import applicationDashboard from "./componenets/Applications";
import * as React from "react";
import List from "../entity/components/List";
import { Candidate } from "src/data/Candidate";
import Profile from "../entity/components/Profile";

import Details from "./componenets/ApplicationDetails";

const applicationsRoutes: StatelessComponent = () => (
  <Switch>
    <Route
      exact={true}
      path="/admin/individual"
      render={() => <List entity={"candidates"} schema={Candidate} />}
    />
    <Route
      exact={true}
      path="/admin/individual/:id"
      render={props => {
        return (
          <Profile id={props.match.params.id} entity={"candidates"}>
            <Details />
          </Profile>
        );
      }}
    />
  </Switch>
);

export default applicationsRoutes;
