import React, { Component } from 'react';
import { default as WTableHead } from '@material-ui/core/TableHead';

class TableHead extends Component {
    render() {
        return <WTableHead {...this.props} />;
    }
}

export default TableHead;
