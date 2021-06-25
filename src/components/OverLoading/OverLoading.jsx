import React, { useEffect } from 'react';
import { CircularProgress, Backdrop, Typography } from '../wrapper-material-ui';

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
        height: '12px'
    }
}));

function OverLoading(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        setOpen(props.open);
    }, [props.open]);

    return (
        <Backdrop
            className={classes.backdrop}
            open={open}
            //onClick={handleClose}
        >
            <div className={classes.info}>
                <CircularProgress color="primary" />
                <div className={classes.hspace}></div>
                {props.message && (
                    <Typography
                        color="textPrimary"
                        align="center"
                        variant="body2">
                        {props.message}
                    </Typography>
                )}
            </div>
        </Backdrop>
    );
}

export default OverLoading;
