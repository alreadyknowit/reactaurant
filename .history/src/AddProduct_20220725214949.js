import React, { Component } from "react";

class AddProduct extends Component {
  state = {
    categoryId: undefined,
    productName: undefined,
    quantity: undefined,
    price: undefined,
    unitsInStock: undefined,
  };
  onChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div>
        <form>
          <input type="text" onChange={this.onChangeHandler}></input>
          <h2>username is {this.state.username}</h2>
        </form>
      </div>
    );
  }
}

export default AddProduct;
