import React from 'react';
import Typography from '../wrapper-material-ui/Typography';
import classNames from 'classnames';
import { formats, validators } from 'investira.sdk';
import PropTypes from 'prop-types';
import Style from './InfoDates.module.scss';

formats.locale('pt-br');
function InfoDates(props) {
    const xClass = classNames(props.className, {
        [Style.horizontal]: props.direction === 'horizontal'
    });
    const xClassMargin = classNames({
        [Style.margin]: props.direction === 'horizontal'
    });
    return (
        <div className={xClass}>
            <div className={xClassMargin}>
                <Typography
                    variant={props.labelVariant}
                    color={'textSecondary'}
                    gutterBottom={props.gutterBottom}
                    component="p">
                    {props.label}
                    {(props.colon || props.direction === 'horizontal') && ':'}
                </Typography>
            </div>
            {validators.isEmpty(props.time) ? (
                <Typography
                    variant={props.timeVariant}
                    color={'textPrimary'}
                    gutterBottom={props.gutterBottom}
                    component="p">
                    --
                </Typography>
            ) : (
                <Typography
                    variant={props.timeVariant}
                    color={'textPrimary'}
                    gutterBottom={props.gutterBottom}
                    component="p">
                    {props.variant === 'custom' &&
                        formats.formatDateCustom(props.time, props.format)}
                    {props.variant === 'datetime' &&
                        formats.formatDateCustom(props.time, 'DD/MMM/YY HH:mm')}
                    {props.variant === 'date' &&
                        formats.formatDateCustom(props.time, 'DD/MMM/YY')}
                    {props.variant === 'duration' &&
                        formats.duration(props.time)}
                    {props.variant === 'fromnow' && formats.fromNow(props.time)}
                </Typography>
            )}
        </div>
    );
}

InfoDates.defaultProps = {
    variant: 'caption',
    labelVariant: 'caption',
    timeVariant: 'caption',
    colon: false,
    gutterBottom: true
};

InfoDates.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    date: PropTypes.string,
    gutterBottom: PropTypes.bool,
    variant: PropTypes.string,
    labelVariant: PropTypes.string,
    time: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    timeVariant: PropTypes.string,
    format: PropTypes.string,
    colon: PropTypes.bool
};

export default InfoDates;
