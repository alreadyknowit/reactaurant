import React, { Component } from "react";

class ProductList extends Component {
  state = {
    bevrages: [
      { id: 1, name: "Coca cola" },
      { id: 2, name: "Fanta" },
      { id: 3, name: "Ayran" },
    ],
    food: [
      { id: 1, name: "Hamburger" },
      { id: 2, name: "Pizza" },
      { id: 3, name: "Turkish Döner" },
    ],
    condiments: [
      { id: 1, name: "Cond1" },
      { id: 2, name: "Cond2" },
      { id: 3, name: "Cond3" },
    ],
  };

  render() {
    return (
      <div>
        <h3 style={{ color: this.props.info.color }}>
          {" "}
          {this.props.info.title}
        </h3>
      </div>
    );
  }
}

export default ProductList;
