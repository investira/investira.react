import React, { Component } from 'react';
import { default as WTablePagination } from '@material-ui/core/TablePagination';

class TablePagination extends Component {
    render() {
        return <WTablePagination {...this.props} />;
    }
}

export default TablePagination;
