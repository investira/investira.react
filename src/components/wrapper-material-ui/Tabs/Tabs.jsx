import React, { memo } from 'react';
import { default as WTabs } from '@material-ui/core/Tabs';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    tabsRoot: {
        padding: '0 16px'
    }
});

const Tabs = memo(props => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <WTabs {...props} classes={{ root: classes.tabsRoot }} />
        </div>
    );
});

export default withStyles(styles)(Tabs);
