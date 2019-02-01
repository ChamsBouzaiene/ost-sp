import { StatelessComponent } from "react";
import { Route, Switch } from "react-router-dom";
import AssessmentsRoutes from "../assessment/Routes";
import ApplicationsRoutes from "../Application/Routes";
import IndApplicationsRoutes from "../indApplication/Routes";
import SelectorsRoutes from "../selector/Routes";
import * as React from "react";
import GradesRoutes from "../grading/Routes";
import AdminsRoutes from "../admin/Routes";
import MainRoutes from "../main/Routes";
import EmailDashboard from "../email/Routes";
import AlumniDashboard from "../alumni/Routes";
import SelectionsDashboard from "../selection/Routes";
import UnassaignedRoutes from "../unassigned/Routes";
import TeamRoutes from "../team/Routes";
import AuthRoutes from "../adminAuth/Routes";

const BackRoutes: StatelessComponent = () => (
  <Switch>
    <Route path="/admin/applications" component={ApplicationsRoutes} />
    <Route path="/admin/individual" component={IndApplicationsRoutes} />
    <Route path="/admin/login" component={AuthRoutes} />
    <Route path="/admin/assessments" component={AssessmentsRoutes} />
    <Route path="/admin/selectors" component={SelectorsRoutes} />
    <Route path="/admin/grades" component={GradesRoutes} />
    <Route path="/admin/admins" component={AdminsRoutes} />
    <Route path="/admin/emails" component={EmailDashboard} />
    <Route path="/admin/alumnis" component={AlumniDashboard} />
    <Route path="/admin/selection" component={SelectionsDashboard} />
    <Route path="/admin/unassigned" component={UnassaignedRoutes} />
    <Route path="/admin/team" component={TeamRoutes} />
    <Route path="/admin" component={MainRoutes} />
  </Switch>
);

export default BackRoutes;
