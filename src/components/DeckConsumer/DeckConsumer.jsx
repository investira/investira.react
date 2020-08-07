import React, { memo } from 'react';
import DeckContext from '../DeckContext';

const DeckConsumer = memo(props => {
    return <DeckContext.Consumer>{props.children}</DeckContext.Consumer>;
});

export default DeckConsumer;
