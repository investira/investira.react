import React, { Component } from 'react';
import { default as WExpansionPanelSummary } from '@material-ui/core/ExpansionPanelSummary';

class ExpansionPanelSummary extends Component {
    render() {
        const { children, ...otherProps } = this.props;
        return (
            <WExpansionPanelSummary {...otherProps}>
                {children}
            </WExpansionPanelSummary>
        );
    }
}

export default ExpansionPanelSummary;
