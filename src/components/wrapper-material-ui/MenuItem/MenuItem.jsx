import React, { PureComponent } from 'react';
import MuiMenuItem from '@material-ui/core/MenuItem';

// function MenuItem(props) {
//     return <WMenuItem {...props} />;
// }

class MenuItem extends PureComponent {
    render() {
        return <MuiMenuItem {...this.props} />;
    }
}

export default MenuItem;
