import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { default as WCard } from '@material-ui/core/Card';

class Card extends Component {
    render() {
        return <WCard {...this.props} />;
    }
}

Card.propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string,
    raised: PropTypes.bool,
};

Card.defaultProps = {
    raised: false,
};

export default Card;
