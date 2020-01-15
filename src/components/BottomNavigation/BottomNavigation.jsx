import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { default as WBottomNavigation } from '@material-ui/core/BottomNavigation';

class BottomNavigation extends Component {
    render() {
        return <WBottomNavigation {...this.props} />;
    }
}

BottomNavigation.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onChange: PropTypes.func,
    showLabels: PropTypes.bool,
    value: PropTypes.any,
};

BottomNavigation.defaultProps = {
    showLabels: false,
};

export default BottomNavigation;
