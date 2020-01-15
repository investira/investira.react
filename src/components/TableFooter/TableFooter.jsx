import React, { Component } from 'react';
import { default as WTableFooter } from '@material-ui/core/TableFooter';

class TableFooter extends Component {
    render() {
        return <WTableFooter {...this.props} />;
    }
}

export default TableFooter;
