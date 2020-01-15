import React, { Component } from 'react';

//import { default as WSlider } from '@material-ui/lab/Slider';

import { default as WSlider } from '@material-ui/core/Slider';

class Slider extends Component {
    render() {
        return <WSlider {...this.props} />;
    }
}

export default Slider;
