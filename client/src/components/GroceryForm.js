import React from 'react';

class GroceryForm extends React.Component {
  state = { name: '' }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.name);
    this.setState({ name: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Add an Item"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button className="btn">Submit</button>
      </form>
    )
  }
}

export default GroceryForm;