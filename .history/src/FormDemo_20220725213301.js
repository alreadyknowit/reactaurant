import React, { Component } from 'react';

class FormDemo extends Component {


    state={
        username: ''
    }
onChangeHandler = (event)=>{
    this.setState( {username:event.target.value})
    console.log(this.state.username)
}

    render() {
        return (
            <div>
                <form>
                    <h2>Form content</h2>
                    <input type="text" onChange={this.onChangeHandler}></input>
                </form>
            </div>
        );
    }
}

export default FormDemo;