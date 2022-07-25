import React, { Component } from "react";
import { ListGroup, ListGroupItem, Container, Row, Spinner } from "reactstrap";
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
      <div className="">
        <Container >
          <Row><h3>{this.props.info.title}</h3>
          </Row>
          <Row>
            {this.state.isLoaded ? (
              <ListGroup>
                {this.state.categories.map((category) => {
                  return (
                    <ListGroupItem
                      style={{ backgroundColor: this.props.onClickColor }}
                      onClick={() => this.props.changeCategory(category)}
                      key={category.id}
                    >
                      {category.categoryName}
                    </ListGroupItem>
                  );
                })}
              </ListGroup>
            ) : (
             
<Spinner>
  Loading...
</Spinner>
            )}
          </Row>
        </Container>

        <h2>
          {this.props.currentCategory !== null
            ? this.props.currentCategory.categoryName
            : ""}
        </h2>
      </div>
    );
  }
}

export default CategoryList;
