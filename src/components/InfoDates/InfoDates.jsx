import React from 'react';
import { Typography } from 'investiraComponents';
import { formats, validators } from 'investira.sdk';
import PropTypes from 'prop-types';

function InfoDates(props) {
    return (
        <div className={props.className}>
            <Typography
                variant={props.labelVariant || 'caption'}
                color={'textSecondary'}
                component="p">
                {props.label}
            </Typography>

            {validators.isEmpty(props.time) ? (
                <Typography
                    variant={props.timeVariant || 'caption'}
                    color={'textPrimary'}
                    component="p">
                    --
                </Typography>
            ) : (
                <Typography
                    variant={props.timeVariant || 'caption'}
                    color={'textPrimary'}
                    component="p">
                    {props.variant === 'custom' &&
                        formats.formatDateCustom(props.time, props.format)}
                    {props.variant === 'datetime' &&
                        formats.formatDateCustom(props.time, 'DD/MMM/YY HH:mm')}
                    {props.variant === 'date' && formats.formatDateCustom(props.time, 'DD/MMM/YY')}
                    {props.variant === 'duration' && formats.duration(props.time)}
                    {props.variant === 'fornow' && formats.fromNow(props.time)}
                </Typography>
            )}
        </div>
    );
}

InfoDates.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    date: PropTypes.string,
    variant: PropTypes.string,
    labelVariant: PropTypes.string,
    time: PropTypes.string,
    timeVariant: PropTypes.string,
    format: PropTypes.string
};

export default InfoDates;
