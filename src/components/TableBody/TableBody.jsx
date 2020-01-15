import React, { Component } from 'react';
import { default as WTableBody } from '@material-ui/core/TableBody';

class TableBody extends Component {
    render() {
        return <WTableBody {...this.props} />;
    }
}

export default TableBody;
