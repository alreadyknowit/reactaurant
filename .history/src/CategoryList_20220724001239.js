import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
class CategoryList extends Component {


    constructor(props){
        super(props)
        this.state = {
            categories:[
                {categoryId:1, categoryName:"Beverages"},
                {categoryId:2, categoryName:"Food"},
                {categoryId:3, categoryName:"Condiments"},
            ]
        }
    }

  render() {
    return (
      <div>
        <h3 style={{color:this.props.info.color}}> {this.props.info.title}</h3>

        <ListGroup>
         
         {
            this.state.categories.forEach(category=>{
          <ListGroupItem>{category.categoryName}</ListGroupItem>

            })
         }
        </ListGroup>
      </div>
    );
  }
}

export default CategoryList;
