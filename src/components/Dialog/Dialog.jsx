import React, { Component } from 'react';
//import PropTypes from 'prop-types';

import { default as WDialog } from '@material-ui/core/Dialog';

class Dialog extends Component {
    render() {
        return <WDialog {...this.props} />;
    }
}

export default Dialog;
