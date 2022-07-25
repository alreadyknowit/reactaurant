import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import { Oval } from "react-loader-spinner";

class CategoryList extends Component {
  state = {
    categories: [],
    isLoaded: false,
  };

  componentDidMount() {
    this.getCategories();
  }
  getCategories() {
    fetch("http://localhost:3004/categories")
      .then((respone) => respone.json())
      .then((res) =>
        this.setState({
          isLoaded: false,
          categories: res,
        })
      );
  }

  changeCategory = (category) => this.setState({ currentCategory: category });

  render() {
    return (
      <div>
        <Container>

        </Container>
       
      </div>
    )
  }
}

export default CategoryList;
