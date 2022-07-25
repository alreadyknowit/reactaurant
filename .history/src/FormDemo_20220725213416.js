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
                    <h2>username is {this.state.username}</h2>
                </form>
            </div>
        );
    }
}

export default FormDemo;