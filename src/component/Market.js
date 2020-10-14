import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class Market extends Component {
	handleInput = (e) => {
		const value = e.target.value;
		console.log(value);
		this.setState({ newItem: value });
	}

	addItem = () => {
		this.props.store.addItem(this.state.newItem);
	}
	render() {
		return (
			<div>
				<input type="text" id="addItem" placeholder="Add item" onChange={this.handleInput} />
				<button onClick={this.addItem}> ADD </button>
			</div>
		);
	}
}

export default Market;
