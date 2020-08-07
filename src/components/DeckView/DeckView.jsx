import React, { memo, useContext } from 'react';
import { DeckContext } from '../';

const DeckView = memo(
    Object.assign(
        props => {
            const deckContext = useContext(DeckContext);

            return React.cloneElement(props.children, {
                id: props.id,
                ...deckContext
            });
        },
        { displayName: 'DeckView' }
    )
);

export default DeckView;
