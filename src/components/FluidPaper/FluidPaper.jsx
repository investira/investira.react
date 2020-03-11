import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Style from './FluidPaper.module.scss';

class FluidPaper extends PureComponent {
    render() {
        const xClass = classNames(Style.root, Style.rounded, Style.elevation1, {
            [Style.square]: this.props.square,
            [Style.elevation0]: this.props.variant === 'elevation' && this.props.elevation === '0',
            [Style.selected]: Boolean(this.props.selected)
        });

        return <div className={xClass}>{this.props.children}</div>;
    }
}

FluidPaper.propTypes = {
    children: PropTypes.node,
    square: PropTypes.bool,
    variant: PropTypes.string,
    elevation: PropTypes.string,
    selected: PropTypes.oneOfType([PropTypes.bool, PropTypes.number])
};

export default FluidPaper;
