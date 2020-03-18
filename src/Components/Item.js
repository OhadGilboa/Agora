import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class Item extends Component {
  constructor() {
    super();
  }

  buyItem = e => {
    this.props.store.buyItem(e.target.value);
  };

  changePrice = e => {
    let newPrice = prompt(`What's the new Price?`);
    this.props.store.changePrice(e.target.value, newPrice);
  };

  render() {
    let item = this.props.item;
    return (
      <li value={this.props.item.name}>
        {item.quantity} {item.name} available at ${item.price} per item
        <button onClick={this.changePrice} value={item.name}>
          Edit Price
        </button>
        <button onClick={this.buyItem} value={item.name}>
          Buy
        </button>
      </li>
    );
  }
}
export default Item;
