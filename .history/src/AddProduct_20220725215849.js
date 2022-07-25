import React, { Component } from "react";
import {
  FormGroup,
  Input,
  Label,
  Form,
} from "reactstrap";
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
            <Input name="quantity"  />
          </FormGroup>
          <FormGroup>
            <Label for="categoryId">Invalid input</Label>
            <Input name="categoryId" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Input without validation</Label>
            <Input />
          </FormGroup>
          <FormGroup className="position-relative">
            <Label for="exampleEmail">Valid input</Label>
            <Input  />
          </FormGroup>
          <FormGroup className="position-relative">
            <Label for="examplePassword">Invalid input</Label>
            <Input  />
          
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default AddProduct;
