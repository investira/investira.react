import React, { Component } from 'react';
import { default as WClickAwayListener } from '@material-ui/core/ClickAwayListener';

class ClickAwayListener extends Component {
    render() {
        return <WClickAwayListener {...this.props} />;
    }
}

export default ClickAwayListener;
