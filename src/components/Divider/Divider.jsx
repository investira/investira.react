import React from 'react';
import classNames from 'classnames';

import Style from './Divider.module.scss';
import PropTypes from 'prop-types';

function Divider(props) {
    const xClass = classNames(Style.root, props.className, {
        [Style.vertical]: props.direction === 'vertical',
        [Style.horizontal]: props.direction === 'horizontal'
    });

    return <div className={xClass}></div>;
}

Divider.propTypes = {
    direction: PropTypes.oneOf(['vertical', 'horizontal']).isRequired,
    className: PropTypes.string
};

export default Divider;
