import React, { memo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
    List,
    Column,
    AutoSizer,
    CellMeasurer,
    CellMeasurerCache,
    InfiniteLoader
} from 'react-virtualized';
import { validators, strings } from 'investira.sdk';

import Style from './ListVirtualized.module.scss';

const ListVirtualized = memo(props => {
    const ListRef = React.createRef();

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
                        style={style}
                        {...props.itemProps}
                    />
                )}
            </CellMeasurer>
        );
    };

    const xClassRoot = classNames(Style.root, props.className, {
        [Style.emptyList]: validators.isEmpty(props.list)
    });

    const xRowCount = props.totalItens || props.list.length;

    const scroolToBottom = pArea => {
        console.log(pArea);
        _cache.current.clearAll();

        const xLastRow = props.list.length;
        ListRef.current.scrollToRow(xLastRow);
    };

    useEffect(() => {
        scroolToBottom();
    }, [props.list]);

    return (
        <div className={xClassRoot}>
            <AutoSizer onResize={scroolToBottom}>
                {({ width, height }) => (
                    <List
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
                    />
                )}
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
