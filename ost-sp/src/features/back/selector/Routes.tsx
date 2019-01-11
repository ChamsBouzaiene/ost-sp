import { StatelessComponent } from "react";
import { Route, Switch } from "react-router-dom";
import SelectorDashboard from "./componenets/SelectorsContainer";
import * as React from "react";
import List from "../entity/components/List";

interface OwnProps {
  entity: string;
}

const SelectorRoutes: StatelessComponent<OwnProps> = () => (
  <Switch>
    <Route exact={true} path="/admin/selectors" component={SelectorDashboard} />

    <Route
      exact={true}
      path="/admin/selectors/list"
      render={() => <List entity={"candidates"} />}
    />
  </Switch>
);

export default SelectorRoutes;
