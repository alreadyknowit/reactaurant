import React, { Component } from 'react';

class ProductList extends Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
              <h3 style={{backgroundColor: 'red'}}> {this.props.info.title}</h3>
            </div>
        );
    }
}

export default ProductList;