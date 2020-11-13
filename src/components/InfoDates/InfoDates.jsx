import React from 'react';
import Typography from '../wrapper-material-ui/Typography';
import { formats, validators } from 'investira.sdk';
import PropTypes from 'prop-types';

formats.locale('pt-br');
function InfoDates(props) {
    return (
        <div className={props.className}>
            <Typography
                variant={props.labelVariant}
                color={'textSecondary'}
                component="p">
                {props.label}
            </Typography>

            {validators.isEmpty(props.time) ? (
                <Typography
                    variant={props.timeVariant}
                    color={'textPrimary'}
                    component="p">
                    --
                </Typography>
            ) : (
                <Typography
                    variant={props.timeVariant}
                    color={'textPrimary'}
                    component="p">
                    {props.variant === 'custom' &&
                        formats.formatDateCustom(props.time, props.format)}
                    {props.variant === 'datetime' &&
                        formats.formatDateCustom(props.time, 'DD/MMM/YY HH:mm')}
                    {props.variant === 'date' &&
                        formats.formatDateCustom(props.time, 'DD/MMM/YY')}
                    {props.variant === 'duration' &&
                        formats.duration(props.time)}
                    {props.variant === 'fornow' && formats.fromNow(props.time)}
                </Typography>
            )}
        </div>
    );
}

InfoDates.defaultProps = {
    variant: 'caption',
    labelVariant: 'caption',
    timeVariant: 'caption'
};

InfoDates.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    date: PropTypes.string,
    variant: PropTypes.string,
    labelVariant: PropTypes.string,
    time: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    timeVariant: PropTypes.string,
    format: PropTypes.string
};

export default InfoDates;
