import React, { useEffect } from 'react';
import { CircularProgress, Backdrop, Typography } from '../wrapper-material-ui';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1
    },
    info: {
        margin: '0 auto',
        width: '60%',
        textAlign: 'center'
    },
    hspace: {
        height: '24px'
    },
    backgroundFlat: {
        backgroundColor: theme.palette.background.default
    }
}));

function OverLoading(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const xClassRoot = classNames(classes.backdrop, {
        [classes.backgroundFlat]: props.backgroundFlat
    });

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        setOpen(props.open);
    }, [props.open]);

    return (
        <Backdrop
            className={xClassRoot}
            open={open}
            //onClick={handleClose}
        >
            {open && (
                <div className={classes.info}>
                    <CircularProgress color="primary" size={props.size || 40} />
                    <div className={classes.hspace}></div>
                    {props.message && (
                        <Typography
                            color={props.color || 'textPrimary'}
                            align="center"
                            variant={props.variant || 'caption'}>
                            {props.message}
                        </Typography>
                    )}
                </div>
            )}
        </Backdrop>
    );
}

export default OverLoading;
