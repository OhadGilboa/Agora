import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { observer } from "mobx-react";
import Item from "./Components/Item";
import Market from "./Components/Market";

@observer
class App extends Component {
  render() {
    let store = this.props.store;
    return (
      <div className="App">
        <Market store={store} />
      </div>
    );
  }
}

export default App;
