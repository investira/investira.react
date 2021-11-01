import React from 'react';
import PropTypes from 'prop-types';
import { default as MuiSnackbar } from '@material-ui/core/Snackbar';
import { default as wSlide } from '@material-ui/core/Slide';
import { duration } from '@material-ui/core/styles/transitions';
import { renders } from '../../../lib';

function Snackbar(props) {
    const { children, autoHideDuration, onClose, ...xPassThruAttrs } = props;

    let xAutoHideDuration =
        autoHideDuration > 0
            ? autoHideDuration
            : autoHideDuration === null
            ? null
            : renders.getTimeFromTextLength(messageLength);

    return (
        <MuiSnackbar
            {...xPassThruAttrs}
            //autoHideDuration={xAutoHideDuration}
            onClose={onClose}>
            {children}
        </MuiSnackbar>
    );
}

export default Snackbar;
