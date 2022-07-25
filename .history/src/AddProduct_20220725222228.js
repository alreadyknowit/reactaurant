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

  onClickHandler = () => {

    
     const url="http://localhost:3004/products";
   
      const response =  fetch(url, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
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
            <Label for="categoryId">Category Id</Label>
            <Input name="categoryId" onChange={this.onChangeHandler} />
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
