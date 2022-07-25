import alertify from "alertifyjs";
import React, { Component } from "react";
import { FormGroup, Input, Label, Form, Button,Spinner } from "reactstrap";
class AddProduct extends Component {
  state = {
    categoryId: undefined,
    productName: undefined,
    quantity: undefined,
    price: undefined,
    unitsInStock: undefined,
    isLoaded: true,
  };
  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  getCategories = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
   await fetch("http://localhost:3004/categories")
      .then((respone) => respone.json())
      .then((res) =>
        this.setState({
          categories: res,
        })
      );
  };

  onClickHandler = async () => {
    const url = "http://localhost:3004/products";

    
   this.setState({isLoaded:false})
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(url, {
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
    }).then(this.setState({ isLoaded: true }));

    // alert according to the status code
    response.status == 201
      ? alertify.success(this.state.productName + " added successfully!")
      : alertify.error("Something went wrong!");
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
            <Input name="categoryId" type="select">
              <option>1</option>
             
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
            {this.state.isLoaded ? "Save" : <Spinner></Spinner>}
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
