import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { default as WIconButton } from '@material-ui/core/IconButton';

class IconButton extends Component {
    render() {
        return <WIconButton {...this.props} />;
    }
}

IconButton.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
    disabled: PropTypes.bool,
    disableRipple: PropTypes.bool,
};

IconButton.defaultProps = {
    color: 'default',
    disabled: false,
};

export default IconButton;
