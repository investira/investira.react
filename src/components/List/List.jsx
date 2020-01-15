import React, { Component } from 'react';

import { default as WList } from '@material-ui/core/List';

class List extends Component {
    render() {
        return <WList {...this.props} />;
    }
}

export default List;
