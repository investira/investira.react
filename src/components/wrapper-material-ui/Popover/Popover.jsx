import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { default as WPopover } from '@material-ui/core/Popover';

class Popover extends Component {
    render() {
        return <WPopover {...this.props} />;
    }
}

export default Popover;
