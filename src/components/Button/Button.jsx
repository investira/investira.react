import React, { Component } from 'react';
import { default as WButton } from '@material-ui/core/Button';

class Button extends Component {
    render() {
        return <WButton {...this.props} />;
    }
}

export default Button;
