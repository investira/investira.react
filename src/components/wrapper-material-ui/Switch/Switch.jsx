import React, { Component } from 'react';

import { default as WSwitch } from '@material-ui/core/Switch';

class Switch extends Component {
    render() {
        return <WSwitch {...this.props} />;
    }
}

export default Switch;
