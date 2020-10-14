import React, { Component } from 'react';
import './App.css';
import { observer, inject } from 'mobx-react';
import Market from './component/Market';
import Item from './component/Item';

@inject('store')
@observer
class App extends Component {

	 async componentDidMount() {
		await this.props.store.getAllItemsFromDB()
		console.log(this.props.store.items)
	}
	render() {
		return (
			<div className="App">
				<h2> Desert Market </h2>
				<Market />
				<div className="items">
					{this.props.store.items.map((item, index) => {
						return <Item key={`inventory-${index}`} 
									 name={item.name}
									 price={item.price}
									 quantity={item.quantity} 
								/>;
					})}
				</div>
			</div>
		);
	}
}

export default App;
