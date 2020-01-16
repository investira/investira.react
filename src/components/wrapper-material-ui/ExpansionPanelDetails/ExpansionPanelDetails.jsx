import React, { Component } from 'react';
import { default as WExpansionPanelDetails } from '@material-ui/core/ExpansionPanelDetails';

class ExpansionPanelDetails extends Component {
    render() {
        const { children, ...otherProps } = this.props;
        return (
            <WExpansionPanelDetails {...otherProps}>
                {children}
            </WExpansionPanelDetails>
        );
    }
}

export default ExpansionPanelDetails;
