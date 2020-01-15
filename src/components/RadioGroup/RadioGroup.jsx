import React, { Component } from 'react';

import { default as WRadioGroup } from '@material-ui/core/RadioGroup';

class RadioGroup extends Component {
    render() {
        return <WRadioGroup {...this.props} />;
    }
}

export default RadioGroup;
