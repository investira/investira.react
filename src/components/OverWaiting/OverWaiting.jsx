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
        width: '60%',
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
        paddingTop: '24px'
    },
    icons: {
        position: 'relative'
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

    const { message, progressProps, typographyProps } = props;

    return (
        <Backdrop
            className={xClassRoot}
            open={open}
            //onClick={handleClose}
        >
            {open && (
                <div className={classes.info}>
                    <div className={classes.icons}>
                        <Icon
                            color={progressProps.color || 'primary'}
                            iconName="clock"
                            size={64}
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
                                color={typographyProps.color || 'textPrimary'}
                                align="center"
                                variant={typographyProps.variant || 'caption'}>
                                {message}
                            </Typography>
                        )}
                    </div>

                    <div className={classes.action}>
                        <Button variant="outlined" color="primary">
                            Cancelar
                        </Button>
                    </div>
                </div>
            )}
        </Backdrop>
    );
}

OverLoading.propTypes = {
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
    typographyProps: PropTypes.object
};

OverLoading.defaultProps = {
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
    }
};

export default OverLoading;
