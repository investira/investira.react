import React, { Component } from 'react';
import { default as WExpansionPanel } from '@material-ui/core/ExpansionPanel';

class ExpansionPanel extends Component {
    render() {
        const { children, ...otherProps } = this.props;
        return <WExpansionPanel {...otherProps}>{children}</WExpansionPanel>;
    }
}

export default ExpansionPanel;
