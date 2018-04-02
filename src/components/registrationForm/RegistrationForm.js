/**
 * Created by Алексей on 20.03.2018.
 */

import React, { Component } from 'react';

class RegistrationForm extends Component {

    render() {
        return (
            <div>
                <form action="/registration-request" method="POST">

                    <label>
                        Email<br/>
                        <input type="email" placeholder="Email" name="email" />
                    </label><br/>

                    <label>
                        Password<br/>
                        <input type="password" placeholder="Password" name="password" />
                    </label><br/>

                    <button type="submit">Registration</button>

                </form>
            </div>
        );
    }
}

export default RegistrationForm;
