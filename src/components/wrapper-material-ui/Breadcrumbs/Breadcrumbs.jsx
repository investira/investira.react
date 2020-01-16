import React, { Component } from 'react';
import { default as WBreadcrumbs } from '@material-ui/core/Breadcrumbs';

class Breadcrumbs extends Component {
    render() {
        return <WBreadcrumbs {...this.props} />;
    }
}

export default Breadcrumbs;
