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
          <input name="categoryId" type="text" onChange={this.onChangeHandler}></input>
          <input name="productName" type="text" onChange={this.onChangeHandler}></input>
          <input name="quantity" type="number" onChange={this.onChangeHandler}></input>
          <input name="price" type="text" onChange={this.onChangeHandler}></input>
          <input name="number" type="text" onChange={this.onChangeHandler}></input>
        </form>
      </div>
    );
  }
}

export default AddProduct;
