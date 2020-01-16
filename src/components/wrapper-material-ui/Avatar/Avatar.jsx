import React, { Component } from 'react';

import { default as WAvatar } from '@material-ui/core/Avatar';

class Avatar extends Component {
    render() {
        return <WAvatar {...this.props} />;
    }
}

export default Avatar;
