import React, { Component } from 'react';
import { default as WInput } from '@material-ui/core/Input';

class Input extends Component {
    render() {
        return <WInput {...this.props} />;
    }
}

export default Input;
