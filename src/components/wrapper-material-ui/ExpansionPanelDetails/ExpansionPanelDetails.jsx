import React from 'react';
import { default as WExpansionPanelDetails } from '@material-ui/core/ExpansionPanelDetails';

function ExpansionPanelDetails(props) {
    const { children, ...otherProps } = props;
    return (
        <WExpansionPanelDetails {...otherProps}>
            {children}
        </WExpansionPanelDetails>
    );
}

export default ExpansionPanelDetails;
