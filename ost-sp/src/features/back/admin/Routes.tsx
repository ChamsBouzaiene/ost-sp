import { StatelessComponent } from "react";
import { Route, Switch, Link } from "react-router-dom";
import AddAdmin from "./componenets/AddAdmin";
import * as React from "react";
import List from "../entity/components/List";
import { Admin } from "src/data/Admin";
import { Button } from "@material-ui/core";
import Profile from "../entity/components/Profile";

interface OwnProps {
  entity: string;
  Candidate: any;
}

const AdminsRoutes: StatelessComponent<OwnProps> = () => (
  <Switch>
    <Route
      exact={true}
      path="/admin/admins"
      render={() => {
        return (
          <List entity={"admins"} schema={Admin}>
            <div className="add-selector">
              <Link to="/admin/admins/add">
                <Button variant="contained" color="primary">
                  ADD ADMIN
                </Button>
              </Link>
            </div>
          </List>
        );
      }}
    />
    <Route
      exact={true}
      path="/admin/admins/add"
      render={() => {
        return <AddAdmin />;
      }}
    />
    <Route
      exact={true}
      path="/admin/admins/:id"
      render={props => {
        return <Profile id={props.match.params.id} entity={"admins"} />;
      }}
    />
  </Switch>
);

export default AdminsRoutes;
