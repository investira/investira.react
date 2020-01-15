import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { default as WInputAdornment } from '@material-ui/core/InputAdornment';

class InputAdornment extends Component {
    render() {
        return <WInputAdornment {...this.props} />;
    }
}

InputAdornment.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    component: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.object,
    ]),
    disableTypography: PropTypes.bool,
    position: PropTypes.oneOf(['start', 'end']),
    variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
};

InputAdornment.defaultProps = {
    component: 'div',
    disableTypography: false,
};

export default InputAdornment;
