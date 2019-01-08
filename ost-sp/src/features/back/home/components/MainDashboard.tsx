import * as React from "react";
import { Component } from "react";
import Header from "../../../../shared/components/Header/Header";
import SideBar from "./SideBar";
import MainRoutes from "../Routes";
import "./SideBar.css";
interface OwnState {}
//type MyProps = {};
type MyState = OwnState;

class MainDashboard extends Component<{}, MyState> {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <Header />
          <div className="main-content">
            <SideBar />
            <div className="main">
              <MainRoutes />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainDashboard;
