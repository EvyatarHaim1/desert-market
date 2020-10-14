import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class Item extends Component {

    promptChangePrice = (name, price) => {
      const newPrice = prompt("Please enter a new price:", price);
      this.props.store.changePrice(name, newPrice)
    }

	render() {
		return (
			<div>
				<li onDoubleClick={(name, price) => this.promptChangePrice(name, price)}>
                     `${this.props.quantity} ${this.props.name} available at ${this.item.price} per item`
                    <button onClick={(name)=> this.props.store.buyItem(name)}>buy</button>
                </li>
			</div>
		);
	}
}

export default Item;
