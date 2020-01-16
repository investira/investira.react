import React, { Component } from 'react';
import { default as WLink } from '@material-ui/core/Link';

class Link extends Component {
    render() {
        return <WLink {...this.props} />;
    }
}

export default Link;
