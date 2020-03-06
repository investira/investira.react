import React from 'react';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Icon from '../../Icon';

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2)
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.primary.main
    }
});

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose, ...otherProps } = props;

    return (
        <MuiDialogTitle
            disableTypography
            className={classes.root}
            {...otherProps}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={onClose}>
                    <Icon iconName={'cancel'} />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

export default DialogTitle;
