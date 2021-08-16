import React, { memo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
    List,
    AutoSizer,
    CellMeasurer,
    CellMeasurerCache
} from 'react-virtualized';
import { validators } from 'investira.sdk';

import Style from './ListVirtualized.module.scss';

const ListVirtualized = memo(props => {
    const ListRef = React.useRef();
    const ListRoot = React.useRef();

    const _cache = useRef(
        new CellMeasurerCache({
            fixedWidth: true,
            minHeight: 50
            //defaultHeight: 100
        })
    );

    function _noRowsRenderer() {
        return <div></div>;
    }

    const _rowRenderer = ({
        index,
        parent,
        key,
        style,
        isScrolling,
        isVisible
    }) => {
        const xScrollAreaHeight = parent._scrollingContainer.scrollHeight;
        const xListAreaHeight = ListRoot.current?.scrollHeight || 0;

        if (ListRoot) {
            const isTaller = xScrollAreaHeight > xListAreaHeight;

            //Inverte os indexes

            const xOrientarion = {
                reverse: {
                    list: [...props.list].reverse(),
                    style: { ...style, top: 'auto', bottom: style.top }
                },
                normal: {
                    list: props.list,
                    style: style
                }
            };

            let xList = xOrientarion['normal'].list;
            let xStyle = xOrientarion['normal'].style;

            if (!isTaller) {
                console.log('!isTaller', !isTaller);
                xList = xOrientarion[props.orientation].list;
                xStyle = xOrientarion[props.orientation].style;
            }

            const Component = props.item;

            return (
                <CellMeasurer
                    cache={_cache.current}
                    columnIndex={0}
                    key={key}
                    rowIndex={index}
                    parent={parent}>
                    {({ measure, registerChild }) => (
                        <Component
                            registerChild={registerChild}
                            onLoad={measure}
                            key={key}
                            id={key}
                            index={index}
                            data={xList[index] || []}
                            style={xStyle}
                            {...props.itemProps}
                        />
                    )}
                </CellMeasurer>
            );
        }
    };

    const removeTabIndex = pListRootElem => {
        if (pListRootElem?.current) {
            const xReactVirtualizedElem = pListRootElem.current.querySelector(
                '[aria-readonly="true"]'
            );

            xReactVirtualizedElem.removeAttribute('tabindex');
        }
    };

    const xClassRoot = classNames(Style.root, props.className, {
        [Style.emptyList]: validators.isEmpty(props.list)
    });

    const xClassOrientation = classNames({
        [Style.list]: props.orientation === 'reverse'
    });

    const xRowCount = props.totalItens || props.list.length;

    const scrollToBottom = pArea => {
        _cache.current.clearAll();

        const xLastRow = props.list.length;
        if (xLastRow) {
            ListRef.current.scrollToRow(xLastRow);
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [props.list]);

    useEffect(() => {
        removeTabIndex(ListRoot);
    }, []);

    return (
        <div ref={ListRoot} className={xClassRoot}>
            <AutoSizer onResize={scrollToBottom} className={Style.autoSizer}>
                {({ width, height }) => {
                    return (
                        <List
                            id={`${props.id}-list`}
                            className={xClassOrientation}
                            ref={ListRef}
                            deferredMeasurementCache={_cache.current}
                            width={width}
                            height={height}
                            overscanRowCount={props.overscanRowCount}
                            noRowsRenderer={_noRowsRenderer}
                            rowCount={xRowCount}
                            rowHeight={_cache.current.rowHeight}
                            rowRenderer={_rowRenderer}
                            scrollToIndex={xRowCount}
                            scrollToAlignment={'end'}
                        />
                    );
                }}
            </AutoSizer>
        </div>
    );
});

ListVirtualized.propTypes = {
    orientation: PropTypes.oneOf(['reverse', 'normal']),
    list: PropTypes.array.isRequired,
    emptyMessage: PropTypes.string,
    item: PropTypes.oneOfType([
        PropTypes.elementType,
        PropTypes.node,
        PropTypes.func
    ]).isRequired,
    className: PropTypes.object,
    itemProps: PropTypes.object,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
    overscanRowCount: PropTypes.number
};

ListVirtualized.defaultProps = {
    itemProps: {},
    list: [],
    overscanRowCount: 10,
    orientation: 'normal'
};

export default ListVirtualized;
