import React, { Component } from 'react';
//import PropTypes from 'prop-types';

import { default as WDialogContent } from '@material-ui/core/DialogContent';

class DialogContent extends Component {
    render() {
        return <WDialogContent {...this.props} />;
    }
}

export default DialogContent;
