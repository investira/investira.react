import React, { Component } from 'react';
import { default as WTabs } from '@material-ui/core/Tabs';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    tabsRoot: {
        padding: '0 16px'
    }
});

class Tabs extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <WTabs {...this.props} classes={{ root: classes.tabsRoot }} />
            </div>
        );
    }
}

export default withStyles(styles)(Tabs);
