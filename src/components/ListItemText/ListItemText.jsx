import React, { Component } from 'react';

import { default as WListItemText } from '@material-ui/core/ListItemText';

class ListItemText extends Component {
    render() {
        return <WListItemText {...this.props} />;
    }
}

export default ListItemText;
