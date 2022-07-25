import React, { Component } from "react";

class ProductList extends Component {
 

  render() {
    return (
      <div>
        <h3 style={{ color: this.props.info.color }}>
          {this.props.info.title}
        </h3>
      </div>
    );
  }
}

export default ProductList;
