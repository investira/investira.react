import React, { Component } from 'react';
//import PropTypes from 'prop-types';

import { default as WDialogTitle } from '@material-ui/core/DialogTitle';

class DialogTitle extends Component {
    render() {
        return <WDialogTitle {...this.props} />;
    }
}

export default DialogTitle;
