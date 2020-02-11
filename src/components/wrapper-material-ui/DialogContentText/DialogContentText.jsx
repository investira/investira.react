import React, { Component } from 'react';
//import PropTypes from 'prop-types';

import { default as WDialogContentText } from '@material-ui/core/DialogContentText';

class DialogContentText extends Component {
    render() {
        return <WDialogContentText {...this.props} />;
    }
}

export default DialogContentText;
