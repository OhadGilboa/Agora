import React, { Component } from "react";
import { observer } from "mobx-react";
import Item from "./Item";

@observer
class Market extends Component {
  handleChange = e => {
    this.setState({
      newItem: e.target.value
    });
  };

  addItem = () => {
    this.props.store.addItem(this.state.newItem);
  };

  render() {
    let store = this.props.store;
    return (
      <div className="Market">
        <div>
          <input onChange={this.handleChange}></input>
          <button onClick={this.addItem}>Add</button>
          {store.list.map((i, ind) => {
            return <Item item={i} key={ind} store={store} />;
          })}
        </div>
      </div>
    );
  }
}
export default Market;
