import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Alerts = memo(props => {
    return <div>{props.children}</div>;
});

Alerts.propTypes = {};

export default Alerts;
