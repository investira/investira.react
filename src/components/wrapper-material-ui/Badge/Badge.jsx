import React, { Component } from 'react';

import { default as WBadge } from '@material-ui/core/Badge';

class Badge extends Component {
    render() {
        return <WBadge {...this.props} />;
    }
}

export default Badge;
