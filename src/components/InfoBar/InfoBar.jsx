import React from 'react';
import PropTypes from 'prop-types';

import { Typography, ProgressBar } from '../';
import { validators } from 'investira.sdk';

import Style from './InfoBar.module.scss';

function InfoBar(props) {
    return (
        <div className={props.className}>
            <Typography
                variant={props.variant}
                color={props.labelColor}
                component="p">
                {props.label}
            </Typography>

            <div className={Style.progressBar}>
                <ProgressBar value={props.value} color={'primary'} />
            </div>

            {!validators.isEmpty(props.caption) && (
                <Typography
                    variant={props.captionVariant}
                    color={'textPrimary'}
                    component="p">
                    {props.caption}
                </Typography>
            )}
        </div>
    );
}

InfoBar.defaultProps = {
    variant: 'caption',
    labelColor: 'textSecondary',
    captionVariant: 'caption'
};

InfoBar.propTypes = {
    label: PropTypes.string,
    caption: PropTypes.string,
    captionVariant: PropTypes.string,
    className: PropTypes.string,
    variant: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    labelColor: PropTypes.oneOf([
        'primary',
        'secondary',
        'info',
        'danger',
        'warning'
    ])
};

export default InfoBar;
