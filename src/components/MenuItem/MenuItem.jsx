import React, { Component } from 'react';

import { default as WMenuItem } from '@material-ui/core/MenuItem';

class MenuItem extends Component {
    render() {
        return <WMenuItem {...this.props} />;
    }
}

export default MenuItem;
