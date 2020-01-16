import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { default as WFormControlLabel } from '@material-ui/core/FormControlLabel';

class FormControlLabel extends Component {
    render() {
        return <WFormControlLabel {...this.props} />;
    }
}

FormControlLabel.propTypes = {
    checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    classes: PropTypes.object,
    className: PropTypes.string,
    control: PropTypes.element,
    disabled: PropTypes.bool,
    inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    label: PropTypes.node,
    labelPlacement: PropTypes.oneOf(['end', 'start']),
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
};

FormControlLabel.defaultProps = {
    labelPlacement: 'end',
};

FormControlLabel.contextTypes = {
    muiFormControl: PropTypes.object,
};

export default FormControlLabel;
