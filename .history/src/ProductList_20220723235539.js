import React, { Component } from 'react';

class ProductList extends Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
              <h3 color={this.props.info.color}> {this.props.info.title}</h3>
            </div>
        );
    }
}

export default ProductList;