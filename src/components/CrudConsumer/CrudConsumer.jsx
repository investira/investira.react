import React, { memo } from 'react';
import CrudContext from '../CrudContext';

const CrudConsumer = memo(props => {
    return <CrudContext.Consumer>{props.children}</CrudContext.Consumer>;
});

export default CrudConsumer;
