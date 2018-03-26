/**
 * Created by Алексей on 20.03.2018.
 */

import React, { Component } from 'react';

class FormField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "text"
        };
    }

    render() {
        return (
            <div>
                <input required type={this.props.type || this.state.type} placeholder={this.props.placeholder || ""} />
            </div>
        );
    }
}

export default FormField;
