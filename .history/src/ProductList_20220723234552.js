import React, { Component } from 'react';

class ProductList extends Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
              <h3> {this.props.title}</h3>
            </div>
        );
    }
}

export default ProductList;