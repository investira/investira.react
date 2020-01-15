import React, { Component } from "react";
import PropTypes from "prop-types";
import { MuiThemeProvider } from "@material-ui/core/styles";

class ThemeProvider extends Component {
  render() {
    const { children, theme } = this.props;
    return <MuiThemeProvider theme={theme.mui}>{children}</MuiThemeProvider>;
  }
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired
};

export default ThemeProvider;
