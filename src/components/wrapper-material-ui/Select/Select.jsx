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
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    }
}));

function Select(props) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        [props.id]: ''
    });

    const handleChange = pEvent => {
        setValues(pOldValues => ({
            ...pOldValues,
            [pEvent.target.name]: pEvent.target.value
        }));

        props.onChange && props.onChange(pEvent);
    };

    return (
        <FormControl
            className={classes.formControl}
            fullWidth={props.fullWidth}>
            {props.label && (
                <InputLabel shrink htmlFor={props.id}>
                    {props.label}
                </InputLabel>
            )}
            <WSelect
                value={values[props.id]}
                onChange={handleChange}
                inputProps={{
                    name: props.id,
                    id: props.id
                }}
                displayEmpty
                name={props.id}
                className={classes.selectEmpty}>
                <MenuItem value="">{props.placeholder}</MenuItem>

                {props.options &&
                    props.options.map((xItem, xIndex) => {
                        return (
                            <MenuItem key={xItem.id} value={xItem.id}>
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
    fullWidth: PropTypes.bool
};

export default Select;
