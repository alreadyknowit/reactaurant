import React, { Component } from 'react';

class CategoryList extends Component {
    render() {
        return (
            <div>
                <h2> CategoryList Component</h2>
                
<ListGroup>
  <ListGroupItem>
    Cras justo odio
  </ListGroupItem>
  <ListGroupItem active>
    Dapibus ac facilisis in
  </ListGroupItem>
  <ListGroupItem>
    Morbi leo risus
  </ListGroupItem>
  <ListGroupItem>
    Porta ac consectetur ac
  </ListGroupItem>
  <ListGroupItem>
    Vestibulum at eros
  </ListGroupItem>
</ListGroup>
            </div>
        );
    }
}

export default CategoryList;