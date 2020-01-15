import React, { Component } from 'react';

import { default as WListItem } from '@material-ui/core/ListItem';

class ListItem extends Component {
    render() {
        return <WListItem {...this.props} />;
    }
}

export default ListItem;
