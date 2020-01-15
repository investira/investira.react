import React, { Component } from 'react';
import { default as WTab } from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    tabRoot: {
        //background: 'red'
    },
    fullWidth: {
        flexBasis: 'auto'
    },
    textColorPrimary: {
        color: '#fff'
    }
});

class Tab extends Component {
    render() {
        const { classes } = this.props;
        return (
            <WTab
                {...this.props}
                classes={{
                    root: classes.tabRoot,
                    fullWidth: classes.fullWidth,
                    textColorPrimary: classes.textColorPrimary
                }}
            />
        );
    }
}

export default withStyles(styles)(Tab);
