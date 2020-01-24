import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardDatePicker from '../KeyboardDatePicker';
import DatePicker from '../DatePicker';

const useStyles = makeStyles(
    theme => ({
        root: {
            position: 'relative',
            marginBottom: '12px'
        }
    }),
    { name: 'DatePickerField' }
);

const DatePickerMode = ({
    field,
    form,
    mode,
    locale,
    disabled,
    locked,
    ...otherProps
}) => {
    const classes = useStyles();
    const currentError = form.errors[field.name];
    const DatePickerProps = {
        id: field.id,
        name: field.name,
        value: field.value,
        locale: locale,
        margin: 'normal',
        error: Boolean(currentError),
        fullWidth: true
    };

    // const InputPropsLocked = locked
    //     ? { style: { color: 'var(--color-info)' } }
    //     : {};

    return (
        <div className={classes.root}>
            {mode === 'input' ? (
                <KeyboardDatePicker
                    format={'DD/MM/YYYY'}
                    disabled={disabled || locked}
                    {...DatePickerProps}
                    {...otherProps}
                    // InputProps={InputPropsLocked}
                    inputProps={{
                        pattern: '[0-9]*'
                    }}
                />
            ) : (
                <DatePicker
                    format={'DD/MMM/YYYY'}
                    disabled={disabled}
                    locked={locked}
                    {...DatePickerProps}
                    {...otherProps}
                />
            )}
        </div>
    );
};

const DatePickerField = props => {
    return (
        <Field
            {...props}
            id={props.id}
            name={props.id}
            value={props.value}
            component={DatePickerMode}
        />
    );
};

DatePickerField.propTypes = {
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

export default DatePickerField;
