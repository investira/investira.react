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
    const ListRef = React.createRef();
    const ListRoot = React.createRef();

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

    const _rowRenderer = ({ index, parent, key, style, isScrolling }) => {
        const xList = props.list;
        const Component = props.item;

        const xStyle = { ...style, top: 'auto', bottom: style.top };
        console.log(xStyle);

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
                    console.log(height);
                    return (
                        <List
                            id={`${props.id}-list`}
                            className={Style.list}
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
    overscanRowCount: 0
};

export default ListVirtualized;
