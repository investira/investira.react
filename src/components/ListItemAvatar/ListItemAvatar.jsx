import React, { Component } from 'react';

import { default as WListItemAvatar } from '@material-ui/core/ListItemAvatar';

class ListItemAvatar extends Component {
    render() {
        return <WListItemAvatar {...this.props} />;
    }
}

export default ListItemAvatar;
