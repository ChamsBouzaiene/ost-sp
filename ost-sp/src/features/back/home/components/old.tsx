import * as React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
interface OwnState {}
//type MyProps = {};
type MyState = OwnState;

class SideBar extends Component<{}, MyState> {
  render() {
    return (
      <div className="sidebar">
        <Link to="/admin" className="sidebar-element">
          Home
        </Link>
        <Link to="/admin/applications" className="sidebar-element">
          Applications Dashboard
        </Link>
        <Link to="/admin/selectors" className="sidebar-element">
          Selectors Dashboard
        </Link>
        <Link to="/admin/grades" className="sidebar-element">
          Grading Dashboard
        </Link>
        <Link to="/admin/assessments" className="sidebar-element">
          Assemssments Dashboard
        </Link>
        <Link to="/admin/emails" className="sidebar-element">
          Emails Managment Dashboard
        </Link>
        <Link to="/admin/alumnis" className="sidebar-element">
          Alumnis Dashboard
        </Link>
        <Link to="/admin/admins" className="sidebar-element">
          Admins Dashboard
        </Link>
        <Link to="/admin/selection" className="sidebar-element">
          Selection Dashboard
        </Link>
        <Link to="/admin/unassigned" className="sidebar-element">
          Unassigned Dashboard
        </Link>
        <Link to="/admin/team" className="sidebar-element">
          Team Dashboard
        </Link>
      </div>
    );
  }
}

export default SideBar;
