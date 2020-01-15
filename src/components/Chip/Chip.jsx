import React, { Component } from 'react';

import { default as WChip } from '@material-ui/core/Chip';

class Chip extends Component {
    render() {
        return <WChip {...this.props} />;
    }
}

export default Chip;
