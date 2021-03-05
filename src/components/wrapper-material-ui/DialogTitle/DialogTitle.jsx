import React from 'react';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Icon from '../../Icon';

const styles = theme => ({
    root: {
        //margin: 0,
        //padding: theme.spacing(2)
    },
    closeButton: {
        position: 'absolute',
        right: '1px',
        top: theme.spacing(2),
        color: theme.palette.primary.main,
        padding: '15px'
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
                    <Icon iconName={'cancel'} size={18} />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

export default DialogTitle;
