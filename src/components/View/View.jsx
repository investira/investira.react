import React from 'react';

const View = props => {
    const { children, ...attrs } = props;
    return <div {...attrs}>{children}</div>;
};

export default View;
