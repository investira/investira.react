import React from 'react';
import { default as WExpansionPanelSummary } from '@material-ui/core/ExpansionPanelSummary';

function ExpansionPanelSummary(props) {
    const { children, ...otherProps } = props;
    return (
        <WExpansionPanelSummary {...otherProps}>
            {children}
        </WExpansionPanelSummary>
    );
}

export default ExpansionPanelSummary;
