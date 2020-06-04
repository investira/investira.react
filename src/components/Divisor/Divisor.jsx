import React from 'react';
import classNames from 'classnames';

import Style from './Divisor.module.scss';
import PropTypes from 'prop-types';

function Divisor(props) {
    const xClass = classNames(Style.root, props.className, {
        [Style.vertical]: props.direction === 'vertical',
        [Style.horizontal]: props.direction === 'horizontal'
    });

    return <div className={xClass}></div>;
}

Divisor.propTypes = {
    direction: PropTypes.oneOf(['vertical', 'horizontal']).isRequired,
    className: PropTypes.string
};

export default Divisor;
