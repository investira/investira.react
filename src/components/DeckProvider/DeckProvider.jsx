import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DeckContext } from '../';

const DeckProvider = memo(props => {
    const [activeView, setActive] = useState(null);
    const [prevView, setPreview] = useState([]);

    const isActive = pId => {
        return pId === activeView;
    };

    const handleNextView = pId => {
        let xPrevView = [...prevView, activeView];

        setActive(pId);
        setPreview(xPrevView);
    };

    const handlePrevView = pCallback => {
        let xPrevView = [...prevView];
        const xActive = xPrevView.pop();

        setActive(xActive);
        setPreview(xPrevView);

        pCallback && pCallback();
    };

    useEffect(() => {
        setActive(props.initialView);
    }, []);

    return (
        <>
            <DeckContext.Provider
                value={{
                    activeView,
                    prevView,
                    isActive: isActive,
                    onNextView: handleNextView,
                    onPrevView: handlePrevView
                }}>
                {props.children}
            </DeckContext.Provider>
        </>
    );
});

DeckProvider.displayName = 'DeckProvider';

DeckProvider.propTypes = {
    initialView: PropTypes.string.isRequired
};

export default DeckProvider;
