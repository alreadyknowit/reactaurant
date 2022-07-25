import React, { Component } from "react";
import { ListGroup, ListGroupItem, Container, Row, Spinner } from "reactstrap";
class CategoryList extends Component {
  state = {
    categories: [],
    isLoaded: false,
  };

  componentDidMount() {
    this.getCategories();
    
  }
  getCategories = async ()=> {
    await new Promise(resolve => setTimeout(resolve, 1000)); 
    fetch("http://localhost:3004/categories")
      .then((respone) => respone.json())
      .then((res) =>
        this.setState({
          isLoaded: true,
          categories: res,
        })
      );
  }

  changeCategory = (category) => this.setState({ currentCategory: category });

  render() {
    return (
      <div >
        <Container>
          <Row >
            <h3>{this.props.info.title}</h3>
          </Row>
          <Row className="justify-content-center ">
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
              <Spinner color="success" type="grow"></Spinner>
            )}
          </Row>
        </Container>

      </div>
    );
  }
}

export default CategoryList;
