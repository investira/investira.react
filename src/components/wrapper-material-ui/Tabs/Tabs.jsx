import React, { memo } from 'react';
import { default as WTabs } from '@material-ui/core/Tabs';

const Tabs = memo(props => {
    return <WTabs {...props} />;
});

export default Tabs;
