import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Style from './FluidPaper.module.scss';

function FluidPaper(props) {
    const xClass = classNames(Style.root, Style.rounded, Style.elevation1, {
        [Style.square]: props.square,
        [Style.elevation0]:
            props.variant === 'elevation' && props.elevation === '0',
        [Style.selected]: Boolean(props.selected)
    });

    return <div className={xClass}>{props.children}</div>;
}

FluidPaper.propTypes = {
    children: PropTypes.node,
    square: PropTypes.bool,
    variant: PropTypes.string,
    elevation: PropTypes.string,
    selected: PropTypes.oneOfType([PropTypes.bool, PropTypes.number])
};

export default FluidPaper;
