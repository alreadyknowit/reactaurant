import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
class CategoryList extends Component {
  state = {
    categories: [
      { categoryId: 1, categoryName: "Beverages" },
      { categoryId: 2, categoryName: "Food" },
      { categoryId: 3, categoryName: "Condiments" },
    ],
  };

  changeCategory = (category) =>
    this.setState({ currentCategory: category });

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
                style={{ backgroundColor: this.props.onClickColor }}
                onClick={() => this.props.changeCategory(category)}
                key={category.categoryId}
              >
                {category.categoryName}
              </ListGroupItem>
            );
          })}
        </ListGroup>

            <h2>{this.props.currentCategory !== null ?this.props.currentCategory.name : ""  }</h2>
      </div>
    );
  }
}

export default CategoryList;
