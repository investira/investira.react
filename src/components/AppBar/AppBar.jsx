import React, { Component } from 'react';

import { default as WAppBar } from '@material-ui/core/AppBar';

class AppBar extends Component {
    render() {
        return <WAppBar {...this.props} />;
    }
}

export default AppBar;
