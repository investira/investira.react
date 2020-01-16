import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { default as WFormControl } from '@material-ui/core/FormControl';

class FormControl extends Component {
    render() {
        return <WFormControl {...this.props} />;
    }
}

FormControl.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    component: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.object,
    ]),
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    fullWidth: PropTypes.bool,
    margin: PropTypes.oneOf(['none', 'dense', 'normal']),
    required: PropTypes.bool,
    variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
};

FormControl.defaultProps = {
    component: 'div',
    disabled: false,
    error: false,
    fullWidth: false,
    margin: 'none',
    required: false,
    variant: 'standard',
};

// FormControl.childContextTypes = {
//     muiFormControl: PropTypes.object,
// };

export default FormControl;
