import React, { Component } from "react";
import { FormGroup, Input, Label, Form, Button } from "reactstrap";
class AddProduct extends Component {
  state = {
    categoryId: undefined,
    productName: undefined,
    quantity: undefined,
    price: undefined,
    unitsInStock: undefined,
  };
  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
    console.log(value);
  };

  getCategories = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    fetch("http://localhost:3004/categories")
      .then((respone) => respone.json())
      .then((res) =>
        this.setState({
          isLoaded: true,
          categories: res,
        })
      );
  };

  onClickHandler = () => {
    const url = "http://localhost:3004/products";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        categoryId: this.state.categoryId,
        productName: this.state.productName,
        quantity: this.state.quantity,
        price: this.state.price,
        unitsInStock: this.state.unitsInStock,
      }),
    });
  };

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="productName">Name</Label>
            <Input name="productName" onChange={this.onChangeHandler} />
          </FormGroup>
          <FormGroup>
            <Label for="quantity">Quantity</Label>
            <Input name="quantity" onChange={this.onChangeHandler} />
          </FormGroup>
          <FormGroup>
            <Label for="categoryId">Category</Label>
            <Input id="exampleSelect" name="select" type="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="price">Price</Label>
            <Input name="price" onChange={this.onChangeHandler} />
          </FormGroup>
          <FormGroup>
            <Label for="unitsInStock">Units in stock</Label>
            <Input name="unitsInStock" onChange={this.onChangeHandler} />
          </FormGroup>
          <Button color="primary" onClick={this.onClickHandler}>
            Save
          </Button>
        </Form>

        <h2>{this.state.productName}</h2>
        <h2>{this.state.quantity}</h2>
        <h2>{this.state.categoryId}</h2>
        <h2>{this.state.price}</h2>
        <h2>{this.state.unitsInStock}</h2>
      </div>
    );
  }
}

export default AddProduct;
