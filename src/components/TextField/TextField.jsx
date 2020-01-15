import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { default as WTextField } from '@material-ui/core/TextField';

class TextField extends Component {
    render() {
        return <WTextField {...this.props} />;
    }
}

TextField.propTypes = {
    autoComplete: PropTypes.string,
    autoFocus: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    FormHelperTextProps: PropTypes.object,
    fullWidth: PropTypes.bool,
    helperText: PropTypes.node,
    id: PropTypes.string,
    InputLabelProps: PropTypes.object,
    InputProps: PropTypes.object,
    inputProps: PropTypes.object,
    inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    label: PropTypes.node,
    margin: PropTypes.oneOf(['none', 'dense', 'normal']),
    multiline: PropTypes.bool,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    rowsMax: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    select: PropTypes.bool,
    SelectProps: PropTypes.object,
    type: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
                PropTypes.bool,
            ])
        ),
    ]),
    variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
};

TextField.defaultProps = {
    required: false,
    select: false,
    variant: 'standard',
};

export default TextField;
