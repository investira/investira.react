import React, { Component } from 'react';
//import PropTypes from 'prop-types';

import { default as WDialogActions } from '@material-ui/core/DialogActions';

class DialogActions extends Component {
    render() {
        return <WDialogActions {...this.props} />;
    }
}

export default DialogActions;
