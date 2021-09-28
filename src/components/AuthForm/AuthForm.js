import React, { Component } from 'react';
import "../AuthForm/AuthForm.css"

export default  class AuthForm extends Component {

    render(){
        return (
            <form className="authorization">
                <div className="authorization__title"><h2>Login</h2></div>
                <input className="authorization__input" type="text" placeholder="Username"></input>
                <input className="authorization__input" type="password" placeholder="Password"></input>
                <button className="authorization__btn">SING IN</button>
            </form>
        )
    }
}



