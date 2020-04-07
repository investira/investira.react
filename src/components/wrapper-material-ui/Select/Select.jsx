import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { default as WSelect } from '@material-ui/core/Select';
import {
    InputLabel,
    FormControl,
    FormHelperText,
    MenuItem
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    formControl: {
        //margin: theme.spacing(1),
        minWidth: 120
    }
    // selectEmpty: {
    //     marginTop: theme.spacing(2)
    // }
}));

function Select(props) {
    //console.log(props);
    const classes = useStyles();
    const [values, setValues] = React.useState({
        [props.id]: props.options[0].value
    });

    const handleChange = pEvent => {
        setValues(pOldValues => ({
            ...pOldValues,
            [pEvent.target.name]: pEvent.target.value
        }));

        props.onChange && props.onChange(pEvent.target.value, pEvent);
    };

    const { formControlProps, ...selectProps } = props;

    return (
        <FormControl
            {...props.formControlProps}
            className={classes.formControl}>
            {props.label && (
                <InputLabel shrink htmlFor={props.id}>
                    {props.label}
                </InputLabel>
            )}
            <WSelect
                value={values[props.id]}
                defaultValue={props.options[0].value}
                {...selectProps}
                onChange={handleChange}
                inputProps={{
                    name: props.id,
                    id: props.id
                }}
                name={props.id}
                className={classes.selectEmpty}>
                {props.placeholder && (
                    <MenuItem value="">{props.placeholder}</MenuItem>
                )}

                {props.options &&
                    props.options.map((xItem, xIndex) => {
                        return (
                            <MenuItem key={xItem.id} value={xItem.value}>
                                {xItem.descricao}
                            </MenuItem>
                        );
                    })}
            </WSelect>
            {props.helperText && (
                <FormHelperText>Label + placeholder</FormHelperText>
            )}
        </FormControl>
    );
}

Select.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    helperText: PropTypes.func,
    options: PropTypes.array,
    placeholder: PropTypes.string,
    fullWidth: PropTypes.bool,
    formControlProps: PropTypes.object
};

export default Select;
