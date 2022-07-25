import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
class CategoryList extends Component {
  state = {
    categories: [
      { categoryId: 1, categoryName: "Beverages" },
      { categoryId: 2, categoryName: "Food" },
      { categoryId: 3, categoryName: "Condiments" },
    ],

    currentCategory: "",
  };



  render() {
    return (
      <div>
        <h3 style={{ color: this.props.info.color }}>
          {this.props.info.title}
        </h3>

        <ListGroup>
          {this.state.categories.map((category) => {
            return (
              <ListGroupItem
                onClick={() => this.changeCategory(category.categoryName)}
                key={category.categoryId}
              >
                {category.categoryName}
              </ListGroupItem>
            );
          })}
        </ListGroup>

        <h2>{this.state.currentCategory}</h2>
      </div>
    );
  }
}

export default CategoryList;
