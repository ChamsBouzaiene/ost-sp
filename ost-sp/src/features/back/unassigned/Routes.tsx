import { StatelessComponent } from "react";
import { Route, Switch } from "react-router-dom";
//import applicationDashboard from "./componenets/Applications";
import * as React from "react";
import List from "../entity/components/List";
import { Unassigned } from "src/data/UnassignedCandidate";
import Profile from "../entity/components/Profile";
import Details from "./componenets/UnassignedContainer";

const UnassaignedRoutes: StatelessComponent = () => (
  <Switch>
    <Route
      exact={true}
      path="/admin/unassigned"
      render={() => <List entity={"candidates"} schema={Unassigned} />}
    />
    <Route
      exact={true}
      path="/admin/unassigned/:id"
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

export default UnassaignedRoutes;
