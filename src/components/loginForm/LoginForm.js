/**
 * Created by Алексей on 20.03.2018.
 */

import React, { Component } from 'react';
import axios from 'axios';

class LoginForm extends Component {
    constructor (props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm() {
        // axios.post('/login-request')
        //     .then(response => console.log(response))
    };

    render() {
        return (
            <div>
                <form action="/login-request" method="POST">

                    <label>
                        Email<br/>
                        <input type="email" placeholder="Email" name="email" />
                    </label><br/>

                    <label>
                        Password<br/>
                        <input type="password" placeholder="Password" name="password" />
                    </label><br/>

                    <button type="submit" onClick={this.submitForm}>Login</button>

                </form>
            </div>
        );
    }
}

export default LoginForm;
