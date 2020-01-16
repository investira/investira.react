import React, { Component } from 'react';
import { default as WCircularProgress } from '@material-ui/core/CircularProgress';

class CircularProgress extends Component {
    render() {
        return <WCircularProgress {...this.props} />;
    }
}

export default CircularProgress;
