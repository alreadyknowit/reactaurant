import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
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
          isLoaded: fale,
          categories: res,
        })
      );
  }

  changeCategory = (category) => this.setState({ currentCategory: category });

  render() {

    if(this.state.isLoaded){
      return (
        <div>
          <h3>{this.props.info.title}</h3>
  
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
  
          <h2>
            {this.props.currentCategory !== null
              ? this.props.currentCategory.categoryName
              : ""}
          </h2>
        </div>
      );
    }else{
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      )
    }
   
  }
}

export default CategoryList;
