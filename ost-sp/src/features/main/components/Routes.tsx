import * as React from 'react'
import { StatelessComponent  } from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import NotFound from "../../../shared/components/NotFound"
import MainDashboard from "../../back/home/components/MainDashboard"
import Auth from "../../front/auth/components/Auth"
import Home from "../../front/home/components/Home"



const redirectTo404 = () => <Redirect to='/404'/>

const Routes : StatelessComponent = () => (
    <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/auth" component={Auth} />
        <Route exact={true} path="/admin" component={MainDashboard} />
        <Route path="/404"  component={NotFound}/>
        <Route render={redirectTo404} />
    </Switch>
)


export default Routes