import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { default as WCheckbox } from '@material-ui/core/Checkbox';
//import { Icon } from '..';

class Checkbox extends Component {
    render() {
        return <WCheckbox {...this.props} />;
    }
}

Checkbox.propTypes = {
    checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    checkedIcon: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    color: PropTypes.oneOf(['primary', 'secondary', 'default']),
    disabled: PropTypes.bool,
    disableRipple: PropTypes.bool,
    icon: PropTypes.node,
    id: PropTypes.string,
    indeterminate: PropTypes.bool,
    indeterminateIcon: PropTypes.node,
    inputProps: PropTypes.object,
    inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    onChange: PropTypes.func,
    type: PropTypes.string,
    value: PropTypes.string,
};

// Checkbox.defaultProps = {
//     checkedIcon: <Icon iconName="checkbox" />,
//     color: 'secondary',
//     icon: <Icon />,
//     indeterminate: false,
//     indeterminateIcon: <IndeterminateCheckBoxIcon />,
// };

export default Checkbox;
