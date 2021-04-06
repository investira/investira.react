import React, { memo, useState } from 'react';
import classNames from 'classnames';
import { Typography, Icon, IconButton } from '../';
import { validators } from 'investira.sdk';
import PropTypes from 'prop-types';
import { capitalize } from '../utils/helpers';
import Style from './Alerts.module.scss';

const Alerts = memo(props => {
    const xClassName = classNames(Style.root, {
        [Style[`color${capitalize(props.color)}`]]: props.color !== 'default'
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
                                'black'
                            }
                            iconName={props.iconName}
                        />
                    </div>
                )}
                <Typography variant={'caption'} color={'inherit'}>
                    {props.children}
                </Typography>
                <IconButton onClick={handleClose}>
                    <Icon size={12} color={'black'} iconName={'cancel'} />
                </IconButton>
            </div>
        );
    }
});

Alerts.propTypes = {
    color: PropTypes.oneOf([
        'default',
        'inherit',
        'primary',
        'secondary',
        'warn',
        'danger',
        'info'
    ]),
    iconName: PropTypes.string
};

Alerts.defaultProps = {
    color: 'default'
};

export default Alerts;
