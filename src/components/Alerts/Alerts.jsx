import React, { memo, useState } from 'react';
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
    // const xSuffixs = {
    //     primary: 'Darkness',
    //     secondary: 'Darkness',
    //     warn: 'Dark',
    //     danger: 'Dark',
    //     info: 'Dark'
    // };

    const handleClose = () => {
        setOpen(false);
    };

    if (!open) {
        return null;
    } else {
        return (
            <div className={xClassName}>
                {!validators.isEmpty(props.iconName) && (
                    <div className={Style.icon}>
                        <Icon
                            size={21}
                            color={
                                // `${props.color}${xSuffixs[props.color]}`
                                props.color || 'black'
                            }
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
        'warn',
        'danger',
        'info'
    ]),
    color: PropTypes.string,
    iconName: PropTypes.string
};

Alerts.defaultProps = {
    backgroundColor: 'default'
};

export default Alerts;
