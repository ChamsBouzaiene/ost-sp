import { StatelessComponent } from "react";
import { Route, Switch, Link } from "react-router-dom";
import AddSelector from "./componenets/AddSelector";
import * as React from "react";
import List from "../entity/components/List";
import { Selector } from "src/data/Selector";
import Profile from "../entity/components/Profile";
import AssignApplication from "./componenets/AssignApplication";
import { Button } from "@material-ui/core";
import "./componenets/selector.css";
interface OwnProps {
  entity: string;
  Candidate: any;
  entities: any;
}

const SelectorRoutes: StatelessComponent<OwnProps> = () => (
  <Switch>
    <Route
      exact={true}
      path="/admin/selectors"
      render={() => {
        return (
          <List entity={"selectors"} schema={Selector}>
            <div className="add-selector">
              <Link to="/admin/selectors/add">
                <Button variant="contained" color="primary">
                  ADD SELECTOR
                </Button>
              </Link>
            </div>
          </List>
        );
      }}
    />
    <Route
      exact={true}
      path="/admin/selectors/add"
      render={() => {
        return <AddSelector />;
      }}
    />
    <Route
      exact={true}
      path="/admin/selectors/:id"
      render={props => {
        return (
          <Profile id={props.match.params.id} entity={"selectors"}>
            <AssignApplication />
          </Profile>
        );
      }}
    />
  </Switch>
);

export default SelectorRoutes;
