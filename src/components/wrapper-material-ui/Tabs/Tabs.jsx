import React from 'react';
import { default as WTabs } from '@material-ui/core/Tabs';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    tabsRoot: {
        padding: '0 16px'
    }
});

function Tabs(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <WTabs {...props} classes={{ root: classes.tabsRoot }} />
        </div>
    );
}

export default withStyles(styles)(Tabs);
