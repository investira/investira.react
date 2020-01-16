import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { default as WPaper } from '@material-ui/core/Paper';

class Paper extends Component {
    render() {
        return <WPaper {...this.props} />;
    }
}

Paper.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.object,
    ]),
    elevation: PropTypes.number,
    square: PropTypes.bool,
};

Paper.defaultProps = {
    component: 'div',
    elevation: 2,
    square: false,
};

export default Paper;
