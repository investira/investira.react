import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { validators } from 'investira.sdk';
import Style from './HorizontalList.module.scss';

const HorizontalList = props => {
    const elementsRef = [];
    let timeout = null;
    let isScrolling = false;
    let isClicked = false;

    const scrollableRef = React.useRef();
    const [initElemsRect, setInitElemsRect] = useState([]);
    const [elemFocusIndex, setElemFocusIndex] = useState(0);
    const [childFocused, setChildFocused] = useState(props.id + '0');
    const [initElementsRef, setInitElementsRef] = useState([]);

    // Centraliza o elemento selecionado
    const centerInScroll = pIndex => {
        window.clearTimeout(timeout);
        const xSelected = pIndex || 0;

        const xFocusElemRect = initElementsRef[
            xSelected
        ].getBoundingClientRect();

        const xScrollElem = scrollableRef.current;

        if (xScrollElem) {
            const xScrollElemRect = xScrollElem.getBoundingClientRect();
            const xSpacer = (xScrollElemRect.width - xFocusElemRect.width) / 2;

            xScrollElem.scrollLeft = initElemsRect[xSelected].x - xSpacer;
        }

        isClicked = false;
    };

    // Armazena a posição inicial de cada elemento da lista
    const saveElemsInitPosition = pElemList => {
        const xInitElemsRect = pElemList.map(elem => {
            return elem.getBoundingClientRect();
        });
        setInitElemsRect(xInitElemsRect);
    };

    const handleClick = (pData, pIndex) => () => {
        window.clearTimeout(timeout);
        isClicked = true;
        setElemFocusIndex(pIndex);
        setChildFocused(props.id + pIndex);
        centerInScroll(pIndex);
        props.childProps.onClick && props.childProps.onClick(pData, pIndex);
    };

    const handleScroll = e => {
        window.clearTimeout(timeout);
        if (isScrolling || !isClicked) {
            timeout = setTimeout(() => {
                isScrolling = false;
                centerInScroll(elemFocusIndex);
            }, 2000);
        }
        isScrolling = true;
    };

    useEffect(() => {
        if (!validators.isEmpty(elementsRef)) {
            saveElemsInitPosition(elementsRef);
            setInitElementsRef([...elementsRef]);
        }
        //Unmount
        return () => {
            window.clearTimeout(timeout);
        };
    }, []);

    // Update
    useEffect(() => {
        window.clearTimeout(timeout);
        if (!validators.isEmpty(elementsRef)) {
            saveElemsInitPosition(elementsRef);
            setInitElementsRef([...elementsRef]);
        }
    }, [props.data]);

    useEffect(() => {
        window.clearTimeout(timeout);
        if (!validators.isEmpty(initElementsRef)) {
            setElemFocusIndex(0);
            setChildFocused(props.id + 0);
            centerInScroll(0);
        }
    }, [initElementsRef]);

    const Component = props.child;

    return (
        <div className={Style.root} onScroll={e => handleScroll(e)}>
            <div id={props.id} ref={scrollableRef} className={Style.container}>
                {!validators.isEmpty(props.data) &&
                    props.data.map((xData, xIndex) => {
                        return (
                            <div
                                className={Style.child}
                                key={props.id + xIndex}
                                ref={elem => (elementsRef[xIndex] = elem)}>
                                <Component
                                    {...props.childProps}
                                    id={props.id + xIndex}
                                    focused={childFocused}
                                    data={xData}
                                    onClick={handleClick(xData, xIndex)}
                                />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

HorizontalList.propTypes = {
    id: PropTypes.string.isRequired,
    child: PropTypes.element.isRequired,
    childProps: PropTypes.object,
    data: PropTypes.array.isRequired
};

HorizontalList.defaultProps = {
    data: []
};

// export default HorizontalList;
export default React.memo(HorizontalList);
