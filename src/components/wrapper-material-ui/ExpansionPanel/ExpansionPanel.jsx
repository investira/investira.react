import React from 'react';
import { default as WExpansionPanel } from '@material-ui/core/ExpansionPanel';

function ExpansionPanel(props) {
    const { children, ...otherProps } = props;
    return <WExpansionPanel {...otherProps}>{children}</WExpansionPanel>;
}

export default ExpansionPanel;
