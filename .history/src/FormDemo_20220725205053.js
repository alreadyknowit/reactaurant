import React, { Component } from 'react';

class FormDemo extends Component {


    state={
        username: ''
    }
onChangeHandler = (event)=>{
    this.setState( {username:event.target.value})
}

    render() {
        return (
            <div>
                <form>
                    <input type="text" onChange={this.onChangeHandler}></input>
                </form>
            </div>
        );
    }
}

export default FormDemo;