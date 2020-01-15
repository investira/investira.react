import React, { Component } from 'react';
import { default as WTableSortLabel } from '@material-ui/core/TableSortLabel';

class TableSortLabel extends Component {
    render() {
        return <WTableSortLabel {...this.props} />;
    }
}

export default TableSortLabel;
