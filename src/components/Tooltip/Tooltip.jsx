import React, { Component } from 'react';
import { default as WTooltip } from '@material-ui/core/Tooltip';

class Tooltip extends Component {
    render() {
        return <WTooltip {...this.props} />;
    }
}

export default Tooltip;
