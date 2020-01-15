import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { default as WBottomNavigationAction } from '@material-ui/core/BottomNavigationAction';

class BottomNavigationAction extends Component {
    render() {
        return <WBottomNavigationAction {...this.props} />;
    }
}

BottomNavigationAction.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.node,
    label: PropTypes.node,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    selected: PropTypes.bool,
    showLabel: PropTypes.bool,
    value: PropTypes.any,
};

export default BottomNavigationAction;
