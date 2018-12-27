import "font-awesome/css/font-awesome.min.css";
import * as React from "react";
import "simple-line-icons/css/simple-line-icons.css";
import "./App.css";
import Routes from "./Routes";
import axios from "axios";

class App extends React.Component {
  componentWillMount() {
    const initAuth = () => {
      let savedToken;
      try {
        savedToken = JSON.parse(localStorage.getItem("token") as any);
      } catch (err) {
        savedToken = null;
      }
      return savedToken || {};
    };

    axios.defaults.headers.common.Authorization = initAuth().id;
    console.log(
      axios.defaults.headers.common.Authorization,
      "axios Header DidMount"
    );
  }
  public render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
