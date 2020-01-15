import React, { Component } from 'react';
import { default as WTable } from '@material-ui/core/Table';

class Table extends Component {
    render() {
        return <WTable {...this.props} />;
    }
}

export default Table;
