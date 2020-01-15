import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { default as WButtonBase } from '@material-ui/core/ButtonBase';

class ButtonBase extends Component {
    render() {
        return <WButtonBase {...this.props} />;
    }
}

ButtonBase.propTypes = {
    action: PropTypes.func,
    buttonRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    centerRipple: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.object,
    ]),
    disabled: PropTypes.bool,
    disableRipple: PropTypes.bool,
    disableTouchRipple: PropTypes.bool,
    focusRipple: PropTypes.bool,
    focusVisibleClassName: PropTypes.string,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onFocusVisible: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onMouseUp: PropTypes.func,
    onTouchEnd: PropTypes.func,
    onTouchMove: PropTypes.func,
    onTouchStart: PropTypes.func,
    role: PropTypes.string,
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    TouchRippleProps: PropTypes.object,
    type: PropTypes.string,
};

ButtonBase.defaultProps = {
    centerRipple: false,
    component: 'button',
    disableRipple: false,
    disableTouchRipple: false,
    focusRipple: false,
    tabIndex: '0',
    type: 'button',
};

export default ButtonBase;
