import React, { Component } from 'react';
import { default as WTableRow } from '@material-ui/core/TableRow';

class TableRow extends Component {
    render() {
        return <WTableRow {...this.props} />;
    }
}

export default TableRow;
