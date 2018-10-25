import React, { Component } from "react";
import axios from "axios";

class ItemForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      name: "",
      expiration: "",
      quantity: 1,
      freezer: false,
      category: "Meats"
    };
  }

  handleInputChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  };

  createItem = () => {
    console.log(this.state);
    axios
      .post("http://localhost:3001/api/items", this.state)
      .then(item => {
        console.log("posted!");
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/categories")
      .then(res => {
        this.setState({
          categories: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const categories = this.state.categories.map(category => {
      return (
        <option key={category._id} value={category.name}>
          {category.name}
        </option>
      );
    });
    return (
      <aside>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleInputChange}
          placeholder="Name"
        />
        <div className="two-inputs">
          <input
            type="text"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleInputChange}
            placeholder="Quantity"
          />
          <input
            type="text"
            name="expiration"
            value={this.state.expiration}
            onChange={this.handleInputChange}
            placeholder="Exp. Date"
          />
        </div>
        <select
          name="category"
          value={this.state.category}
          onChange={this.handleInputChange}
          placeholder="Category"
        >
          {categories}
        </select>
        <div className="checkboxes">
          <input
            type="radio"
            name="freezer"
            onChange={this.handleInputChange}
            value={this.state.freezer}
          />
          <label htmlFor="freezer">Freezer</label>
          <input
            type="radio"
            name="freezer"
            onChange={this.handleInputChange}
            value={!this.state.freezer}
          />
          <label htmlFor="fridge">Fridge</label>
        </div>
        <button type="submit" onClick={this.createItem}>
          Submit
        </button>
      </aside>
    );
  }
}

export default ItemForm;
