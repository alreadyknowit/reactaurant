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
        <Form>
  <FormGroup>
    <Label for="exampleEmail">
      Input without validation
    </Label>
    <Input />
    <FormFeedback>
      You will not be able to see this
    </FormFeedback>
    <FormText>
      Example help text that remains unchanged.
    </FormText>
  </FormGroup>
  <FormGroup>
    <Label for="exampleEmail">
      Valid input
    </Label>
    <Input valid />
    <FormFeedback valid>
      Sweet! that name is available
    </FormFeedback>
    <FormText>
      Example help text that remains unchanged.
    </FormText>
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
      Invalid input
    </Label>
    <Input invalid />
    <FormFeedback>
      Oh noes! that name is already taken
    </FormFeedback>
    <FormText>
      Example help text that remains unchanged.
    </FormText>
  </FormGroup>
  <FormGroup>
    <Label for="exampleEmail">
      Input without validation
    </Label>
    <Input />
    <FormFeedback tooltip>
      You will not be able to see this
    </FormFeedback>
    <FormText>
      Example help text that remains unchanged.
    </FormText>
  </FormGroup>
  <FormGroup className="position-relative">
    <Label for="exampleEmail">
      Valid input
    </Label>
    <Input valid />
    <FormFeedback
      tooltip
      valid
    >
      Sweet! that name is available
    </FormFeedback>
    <FormText>
      Example help text that remains unchanged.
    </FormText>
  </FormGroup>
  <FormGroup className="position-relative">
    <Label for="examplePassword">
      Invalid input
    </Label>
    <Input invalid />
    <FormFeedback tooltip>
      Oh noes! that name is already taken
    </FormFeedback>
    <FormText>
      Example help text that remains unchanged.
    </FormText>
  </FormGroup>
</Form>
      </div>
    );
  }
}

export default AddProduct;
