import { StatelessComponent } from "react";
import { Route, Switch } from "react-router-dom";
//import SelectorDashboard from "./componenets/SelectorsContainer";
import * as React from "react";
import List from "../entity/components/List";
import { Selector } from "src/data/Selector";
import Profile from "../entity/components/Profile";

interface OwnProps {
  entity: string;
  Candidate: any;
}

const SelectorRoutes: StatelessComponent<OwnProps> = () => (
  <Switch>
    <Route
      exact={true}
      path="/admin/selectors"
      render={() => <List entity={"selectors"} schema={Selector} />}
    />
    <Route
      exact={true}
      path="/admin/selectors/:id"
      render={props => {
        return <Profile id={props.match.params.id} entity={"selectors"} />;
      }}
    />
  </Switch>
);

export default SelectorRoutes;
