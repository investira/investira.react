import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { default as WAppBar } from '@material-ui/core/AppBar';

class AppBar extends Component {
    render() {
        return <WAppBar {...this.props} />;
    }
}

AppBar.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object,
    className: PropTypes.string,
    color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'default']),
    position: PropTypes.oneOf([
        'fixed',
        'absolute',
        'sticky',
        'static',
        'relative',
    ]),
};

AppBar.defaultProps = {
    color: 'inherit',
    position: 'fixed',
};

export default AppBar;
