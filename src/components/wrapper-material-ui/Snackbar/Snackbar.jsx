import React, { Component } from "react";
import PropTypes from "prop-types";

import { default as WSnackbar } from "@material-ui/core/Snackbar";
import { default as wSlide } from "@material-ui/core/Slide";
import { duration } from "@material-ui/core/styles/transitions";
import { renders } from "../../../lib";

class Snackbar extends Component {
  render() {
    const { autoHideDuration, messageLength, ...xPassThruAttrs } = this.props;

    let xAutoHideDuration =
      autoHideDuration > 0
        ? autoHideDuration
        : autoHideDuration === null
        ? null
        : renders.getTimeFromTextLength(messageLength);
    return (
      <WSnackbar {...xPassThruAttrs} autoHideDuration={xAutoHideDuration} />
    );
  }
}

Snackbar.propTypes = {
  action: PropTypes.node,
  anchorOrigin: PropTypes.shape({
    horizontal: PropTypes.oneOf(["left", "center", "right"]).isRequired,
    vertical: PropTypes.oneOf(["top", "bottom"]).isRequired
  }),
  autoHideDuration: PropTypes.number,
  messageLength: PropTypes.number,
  children: PropTypes.element,
  classes: PropTypes.object,
  className: PropTypes.string,
  ClickAwayListenerProps: PropTypes.object,
  ContentProps: PropTypes.object,
  disableWindowBlurListener: PropTypes.bool,
  key: PropTypes.any,
  message: PropTypes.node,
  onClose: PropTypes.func,
  onEnter: PropTypes.func,
  onEntered: PropTypes.func,
  onEntering: PropTypes.func,
  onExit: PropTypes.func,
  onExited: PropTypes.func,
  onExiting: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  open: PropTypes.bool,
  resumeHideDuration: PropTypes.number,
  TransitionComponent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object
  ]),
  transitionDuration: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({ enter: PropTypes.number, exit: PropTypes.number })
  ]),
  TransitionProps: PropTypes.object
};

Snackbar.defaultProps = {
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "center"
  },
  messageLength: 0,
  autoHideDuration: null,
  disableWindowBlurListener: false,
  TransitionComponent: wSlide,
  transitionDuration: {
    enter: duration.enteringScreen,
    exit: duration.leavingScreen
  }
};

export default Snackbar;
