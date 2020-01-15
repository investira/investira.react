import React, { Component } from 'react';

import { default as WInputBase } from '@material-ui/core/InputBase';

class InputBase extends Component {
    render() {
        return <WInputBase {...this.props} />;
    }
}

export default InputBase;
