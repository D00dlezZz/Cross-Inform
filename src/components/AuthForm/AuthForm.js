import React, { Component } from 'react';
import "../AuthForm/AuthForm.css"

export default  class AuthForm extends Component {
    state = {
        userValue: '',
        passValue: '',
    }

//    getValue = (e) => {
//     e.preventDefault();
//     this.setState({userValue: e.target.value})
//     console.log(this.state.userValue)
//    }

   searchLineChangeHandler = (e) => {
    this.setState({ userValue: e.target.value });
    console.log(this.state.userValue)
}

    render(){
        return (
            <form className="authorization">
                <div className="authorization__title"><h2>Login</h2></div>
                <input className="authorization__input"  onChange={this.searchLineChangeHandler} type="text" placeholder="Username"></input>
                <input className="authorization__input" type="password" placeholder="Password"></input>
                <button onClick={this.searchLineChangeHandler} className="authorization__btn" type="submit">SING IN</button>
            </form>
        )
    }
}



