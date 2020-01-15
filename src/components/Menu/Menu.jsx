import React, { Component } from 'react';

import { default as WMenu } from '@material-ui/core/Menu';

class Menu extends Component {
    render() {
        return <WMenu {...this.props} />;
    }
}

export default Menu;
