import React, { useEffect } from 'react';
import { CircularProgress, Backdrop } from '../wrapper-material-ui';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1
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
            <CircularProgress color="primary" />
        </Backdrop>
    );
}

export default OverLoading;
