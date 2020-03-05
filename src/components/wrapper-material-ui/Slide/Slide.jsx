import React, { Component } from 'react';

import { default as WSlide } from '@material-ui/core/Slide';

class Slide extends Component {
    render() {
        return <WSlide {...this.props} />;
    }
}

export default Slide;
