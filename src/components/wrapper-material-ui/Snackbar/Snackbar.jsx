import React from 'react';
import { default as MuiSnackbar } from '@material-ui/core/Snackbar';

function Snackbar(props) {
    const { children, autoHideDuration, onClose, ...xPassThruAttrs } = props;

    return (
        <MuiSnackbar {...xPassThruAttrs} onClose={onClose}>
            {children}
        </MuiSnackbar>
    );
}

export default Snackbar;
