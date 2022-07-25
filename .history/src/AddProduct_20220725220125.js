import React, { Component } from "react";
import { FormGroup, Input, Label, Form,Button } from "reactstrap";
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
        <Form>
          <FormGroup>
            <Label for="productName">Name</Label>
            <Input name="productName" />
          </FormGroup>
          <FormGroup>
            <Label for="quantity">Quantity</Label>
            <Input name="quantity" />
          </FormGroup>
          <FormGroup>
            <Label for="categoryId">Category Id</Label>
            <Input name="categoryId" />
          </FormGroup>
          <FormGroup>
            <Label for="price">Price</Label>
            <Input name="price" />
          </FormGroup>
          <FormGroup>
            <Label for="unitsInStock">Units in stock</Label>
            <Input name="unitsInStock" />
          </FormGroup>
          <Button color="primary">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default AddProduct;
