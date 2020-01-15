import React from 'react';
import PropTypes from 'prop-types';
import KeyboardDatePicker from '../KeyboardDatePicker';
import DatePicker from '../DatePicker';

const DatePickerMode = ({
    value,
    id,
    name,
    mode,
    locale,
    disabled,
    locked,
    ...otherProps
}) => {
    //const currentError = form.errors[field.name];
    const DatePickerProps = {
        id: id,
        name: name,
        value: value,
        locale: locale,
        margin: 'normal',
        fullWidth: true
    };

    const InputPropsLocked = locked
        ? { style: { color: 'var(--color-info)' } }
        : {};

    return mode === 'input' ? (
        <KeyboardDatePicker
            format={'DD/MM/YYYY'}
            disabled={disabled || locked}
            {...otherProps}
            {...DatePickerProps}
            InputProps={InputPropsLocked}
        />
    ) : (
        //format={'ddd, LL'}
        <DatePicker
            format={'DD/MMM/YYYY'}
            disabled={disabled}
            locked={locked}
            {...DatePickerProps}
            {...otherProps}
        />
    );
};

const DatePickerWithMode = props => {
    return (
        <DatePickerMode
            {...props}
            id={props.id}
            name={props.id}
            value={props.value}
        />
    );
};

DatePickerWithMode.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.string,
    locale: PropTypes.string,
    mode: PropTypes.string,
    value: PropTypes.object,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    minDate: PropTypes.object,
    maxDate: PropTypes.object,
    disabled: PropTypes.bool
};

export default DatePickerWithMode;
