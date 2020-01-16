import React from 'react';
import { default as WSnackbarContent } from '@material-ui/core/SnackbarContent';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
    success: {
        backgroundColor: green[600]
    },
    error: {
        backgroundColor: theme.palette.error.dark
    },
    info: {
        backgroundColor: theme.palette.primary.dark
    },
    warning: {
        backgroundColor: amber[700]
    },
    icon: {
        fontSize: 20,
        opacity: 0.9,
        marginRight: theme.spacing(1)
    },
    message: {
        display: 'flex',
        alignItems: 'center'
    }
}));

function SnackbarContent(props) {
    const classes = useStyles();
    const { className, message, onClose, variant, icon, ...other } = props;
    const Icon = icon;
    const xClassName = classNames(classes[variant], className, {});

    return (
        <WSnackbarContent
            className={xClassName}
            message={
                <span id="client-snackbar" className={classes.message}>
                    <Icon className={classes.icon} />
                    {message}
                </span>
            }
            {...other}
        />
    );
}

export default SnackbarContent;
