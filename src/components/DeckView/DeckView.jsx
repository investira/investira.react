import React, { memo, useContext } from 'react';
import { DeckContext } from '../';

const DeckView = memo(props => {
    const deckContext = useContext(DeckContext);

    return React.cloneElement(props.children, { id: props.id, ...deckContext });
});

export default DeckView;
