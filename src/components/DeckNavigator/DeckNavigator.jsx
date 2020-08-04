import React, { memo } from 'react';

import { Deck, DeckContext } from '../';

const DeckNavigator = memo(props => {
    return (
        <DeckContext.Consumer>
            {({ prevView, activeView }) => {
                return (
                    <Deck
                        id="deck-navigator"
                        prevView={prevView}
                        activeView={activeView}>
                        {props.children}
                    </Deck>
                );
            }}
        </DeckContext.Consumer>
    );
});

export default DeckNavigator;
