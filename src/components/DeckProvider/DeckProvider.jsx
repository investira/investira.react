import React, { memo, useState, useEffect } from 'react';
import { validators } from 'investira.sdk';
import PropTypes from 'prop-types';
import { DeckContext } from '../';

const DeckProvider = memo(props => {
    const [activeView, setActive] = useState(null);
    const [prevView, setPreview] = useState([]);
    const [beforeView, setBeforeView] = useState(null);

    const isActive = pId => {
        return pId === activeView;
    };

    const isBefore = pId => {
        return pId === beforeView;
    };

    const handleNextView = pId => {
        let xPrevView = [...prevView, activeView];

        setActive(pId);
        setPreview(xPrevView);
        setBeforeView(activeView);
    };

    const handlePrevView = pCallback => {
        if (!validators.isEmpty(prevView)) {
            let xPrevView = [...prevView];
            const xActive = xPrevView.pop();

            setActive(xActive);
            setPreview(xPrevView);
            setBeforeView(activeView);
        }

        pCallback && pCallback({ activeView, prevView, beforeView });
    };

    const handleResetState = (pActive = null, pPreview = [], pCallback) => {
        setActive(pActive);
        setPreview(pPreview);
        pCallback && pCallback();
    };

    useEffect(() => {
        setActive(props.initialView);
        setPreview(props.initialPrev);
    }, [props.initialView, props.initialPrev]);

    return (
        <>
            <DeckContext.Provider
                value={{
                    ...props.value,
                    activeView,
                    prevView,
                    isActive,
                    isBefore,
                    beforeView,
                    onNextView: handleNextView,
                    onPrevView: handlePrevView,
                    onReset: handleResetState
                }}>
                {props.children}
            </DeckContext.Provider>
        </>
    );
});

DeckProvider.displayName = 'DeckProvider';

DeckProvider.propTypes = {
    initialView: PropTypes.string.isRequired,
    initialPrev: PropTypes.array
};

DeckProvider.defaultProps = {
    value: {},
    initialPrev: []
};

export default DeckProvider;
