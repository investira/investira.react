import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Style from './ScrollContainer.module.scss';
//import { momentumScroll } from './lib/behaviors';
import { momentumScroll } from '../../../lib/behaviors';

class ScrollContainer extends Component {
    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
        this.momentum = null;
    }

    componentDidMount() {
        this.momentum = momentumScroll(this.containerRef.current, {
            speed: this.props.speed,
            duration: this.props.duration,
            directions: this.props.directions
        });

        this.momentum.mount();
    }

    componentDidUpdate() {}

    componentWillUnmount() {
        this.momentum.unmount();
    }

    render() {
        const xClass = classNames(Style.root, this.props.className, {});
        return (
            <div
                className={xClass}
                ref={this.containerRef}
                style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}

ScrollContainer.propTypes = {
    speed: PropTypes.number,
    duration: PropTypes.number,
    directions: PropTypes.number
};

ScrollContainer.defaultProps = {
    speed: 2,
    duration: 2,
    directions: 2
};

export default ScrollContainer;
