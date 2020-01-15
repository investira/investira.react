import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { default as WToolbar } from '@material-ui/core/Toolbar';

class Toolbar extends Component {
    render() {
        return <WToolbar {...this.props} />;
    }
}

Toolbar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disableGutters: PropTypes.bool,
    variant: PropTypes.oneOf(['regular', 'dense']),
};

Toolbar.defaultProps = {
    disableGutters: false,
    variant: 'regular',
};

export default Toolbar;
