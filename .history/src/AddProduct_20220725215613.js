import React, { Component } from "react";
import {
  FormGroup,
  Input,
  Label,
  FormFeedback,
  FormText,
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
            <Label for="exampleEmail">Name</Label>
            <Input />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Valid input</Label>
            <Input valid />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Invalid input</Label>
            <Input invalid />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Input without validation</Label>
            <Input />
          </FormGroup>
          <FormGroup className="position-relative">
            <Label for="exampleEmail">Valid input</Label>
            <Input valid />
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
