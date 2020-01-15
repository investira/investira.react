import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { default as WSwipeableDrawer } from '@material-ui/core/SwipeableDrawer';

import { duration } from '@material-ui/core/styles/transitions';

class SwipeableDrawer extends Component {
    render() {
        return <WSwipeableDrawer {...this.props} />;
    }
}

SwipeableDrawer.propTypes = {
    anchor: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
    disableBackdropTransition: PropTypes.bool,
    disableDiscovery: PropTypes.bool,
    disableSwipeToOpen: PropTypes.bool,
    hysteresis: PropTypes.number,
    minFlingVelocity: PropTypes.number,
    ModalProps: PropTypes.object,
    onClose: PropTypes.func.isRequired,
    onOpen: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    PaperProps: PropTypes.object,
    swipeAreaWidth: PropTypes.number,
    theme: PropTypes.object,
    transitionDuration: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.shape({ enter: PropTypes.number, exit: PropTypes.number }),
    ]),
    variant: PropTypes.oneOf(['permanent', 'persistent', 'temporary']),
};

SwipeableDrawer.defaultProps = {
    anchor: 'left',
    disableBackdropTransition: false,
    disableDiscovery: false,
    disableSwipeToOpen:
        typeof navigator !== 'undefined' &&
        /iPad|iPhone|iPod/.test(navigator.userAgent),
    hysteresis: 0.55,
    minFlingVelocity: 400,
    swipeAreaWidth: 20,
    transitionDuration: {
        enter: duration.enteringScreen,
        exit: duration.leavingScreen,
    },
    variant: 'temporary', // Mobile first.
};

export default SwipeableDrawer;
