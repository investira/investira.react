import React, { memo, useState, useEffect } from 'react';
import classNames from 'classnames';
import { Typography, Icon, IconButton } from '../';
import { validators } from 'investira.sdk';
import PropTypes from 'prop-types';
import { capitalize } from '../utils/helpers';
import Style from './Alerts.module.scss';

const Alerts = memo(props => {
    const xClassName = classNames(Style.root, {
        [Style[`color${capitalize(props.backgroundColor)}`]]:
            props.backgroundColor !== 'default',
        [Style.justify]: props.close
    });
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        setOpen(props.open);
    }, [props.open]);

    if (!open) {
        return null;
    } else {
        return (
            <div className={xClassName}>
                {!validators.isEmpty(props.iconName) && (
                    <div className={Style.icon}>
                        <Icon
                            size={21}
                            color={props.color || 'black'}
                            iconName={props.iconName}
                        />
                    </div>
                )}
                <div className={Style.content}>
                    <Typography
                        variant={'caption'}
                        color={props.color || 'inherit'}>
                        {props.children}
                    </Typography>
                </div>
                {props.close && (
                    <IconButton edge={'end'} onClick={handleClose}>
                        <Icon
                            size={12}
                            color={props.color || 'black'}
                            iconName={'cancel'}
                        />
                    </IconButton>
                )}
            </div>
        );
    }
});

Alerts.propTypes = {
    backgroundColor: PropTypes.oneOf([
        'default',
        'inherit',
        'primary',
        'secondary',
        'secondaryLight',
        'secondaryLightness',
        'warn',
        'danger',
        'info',
        'infoHighlight'
    ]),
    color: PropTypes.string,
    iconName: PropTypes.string,
    open: PropTypes.bool,
    close: PropTypes.bool
};

Alerts.defaultProps = {
    backgroundColor: 'default',
    open: true,
    close: true
};

export default Alerts;
