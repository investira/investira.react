import React, { Component } from 'react';

import { default as WInputLabel } from '@material-ui/core/InputLabel';

class InputLabel extends Component {
    render() {
        return <WInputLabel {...this.props} />;
    }
}

export default InputLabel;
