import React from 'react';
import { Typography } from '../';
import { validators } from 'investira.sdk';
import PropTypes from 'prop-types';

function Info(props) {
    return (
        <div className={props.className}>
            <Typography
                variant={props.variant || 'caption'}
                color={props.labelColor || 'textSecondary'}
                component="p">
                {props.label}
            </Typography>

            {validators.isEmpty(props.value) ? (
                <Typography
                    variant={props.variantValue || 'caption'}
                    color={'textPrimary'}
                    component="p">
                    --
                </Typography>
            ) : (
                <Typography
                    variant={props.variantValue || props.variant || 'caption'}
                    color={'textPrimary'}
                    component="p">
                    {props.value}
                </Typography>
            )}
        </div>
    );
}

Info.propTypes = {
    label: PropTypes.string,
    date: PropTypes.string,
    className: PropTypes.string,
    variant: PropTypes.string,
    variantValue: PropTypes.string,
    labelColor: PropTypes.string,
    value: PropTypes.string
};

export default Info;
