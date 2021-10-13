import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    Backdrop,
    Typography,
    LinearProgress,
    Button
} from '../wrapper-material-ui';
import { Icon } from '../';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1
    },
    info: {
        margin: '0 auto',
        width: '80%',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    hspace: {
        height: '16px'
    },
    backgroundFlat: {
        backgroundColor: theme.palette.background.default
    },
    action: {
        position: 'absolute',
        bottom: '24px'
    },
    progress: {
        paddingTop: '24px',
        width: '100%'
    },
    icons: {
        position: 'relative'
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '55px',
        padding: '16px'
    }
}));

function OverWaiting(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const xClassRoot = classNames(classes.backdrop, {
        [classes.backgroundFlat]: props.backgroundFlat
    });

    const handleCancel = pEvent => {
        props.onCancel && props.onCancel(pEvent);
    };

    useEffect(() => {
        setOpen(props.open);
    }, [props.open]);

    const { message, progressProps, typographyProps, header } = props;

    return (
        <Backdrop className={xClassRoot} open={open}>
            {open && (
                <>
                    {header && <div className={classes.header}>{header}</div>}
                    <div className={classes.info}>
                        <div className={classes.icons}>
                            <Icon
                                color={progressProps.color || 'primary'}
                                iconName="clock"
                                size={128}
                            />
                        </div>

                        <div className={classes.progress}>
                            <LinearProgress
                                color={progressProps.color}
                                variant={progressProps.variant}
                                value={progressProps.value}
                            />
                            <div className={classes.hspace}></div>
                            {message && (
                                <Typography
                                    color={
                                        typographyProps.color || 'textPrimary'
                                    }
                                    align="center"
                                    variant={
                                        typographyProps.variant || 'caption'
                                    }>
                                    {message}
                                </Typography>
                            )}
                        </div>

                        {props.cancelable && (
                            <div className={classes.action}>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    onClick={handleCancel}>
                                    Cancelar
                                </Button>
                            </div>
                        )}
                    </div>
                </>
            )}
        </Backdrop>
    );
}

OverWaiting.propTypes = {
    open: PropTypes.bool,
    min: PropTypes.number,
    max: PropTypes.number,
    message: PropTypes.string,
    progressProps: PropTypes.shape({
        color: PropTypes.oneOf(['primary', 'secondary']),
        value: PropTypes.number,
        variant: PropTypes.oneOf([
            'buffer',
            'determinate',
            'indeterminate',
            'query'
        ])
    }),
    typographyProps: PropTypes.object,
    onCancel: PropTypes.func,
    cancelable: PropTypes.bool
};

OverWaiting.defaultProps = {
    open: false,
    min: 0,
    max: 100,
    progressProps: {
        color: 'primary',
        value: 100,
        variant: 'indeterminate'
    },
    typographyProps: {
        color: 'textPrimary',
        variant: 'caption'
    },
    cancelable: true
};

export default OverWaiting;
