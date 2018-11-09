import React, { Component } from 'react';
import GroceryForm from './components/GroceryForm';
import GroceryList from './components/GroceryList';

class App extends Component {
  state = { items: [] }

  componentDidMount() { 
    // make a call to our rails server to get items
    fetch('/api/items')
      .then( res => res.json() )
      .then( items => this.setState({ items }) )
  }

  addItem = (name) => {
    // make api call to rails server to add item
    const item = { name };
    fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(item)
    }).then( res => res.json() )
      .then( item => {
        const { items } = this.state;
        this.setState({ items: [...items, item] });
      })
  }

  updateItem = (id) => {
    // TODO make api call to update todo
    fetch(`/api/items/${id}`, { method: 'PUT' })
      .then( res => res.json() )
      .then( item => {        
        const items = this.state.items.map( i => {
          if (i.id === id)
            return item
          return i;
      });
  
    // update state
      this.setState({ items });
    })
  }

  deleteItem = (id) => {
    // make api call to delete todo
    fetch(`/api/items/${id}`, { method: 'DELETE' })
      .then( () => {
        const { items } = this.state;
        // remove it from state
        this.setState({ items: items.filter( i => i.id !== id ) }) // show all items except deleted item
      })
  }

  render() {
    return (
      <div className="container">
        <h2>Grocery List</h2>
        <GroceryForm addItem={this.addItem} />
        <GroceryList
          items={this.state.items}
          updateItem={this.updateItem}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
