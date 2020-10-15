import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
    List,
    AutoSizer,
    CellMeasurer,
    CellMeasurerCache,
    InfiniteLoader
} from 'react-virtualized';
import { validators, strings } from 'investira.sdk';

import Style from './ListVirtual.module.scss';

class ListVirtual extends PureComponent {
    constructor() {
        super();
        this.renderRow = this.renderRow.bind(this);

        this.cache = new CellMeasurerCache({
            fixedWidth: true,
            defaultHeight: 100
            //keyMapper: index => this.props.list[index]
        });
    }

    hasListData = pList => {
        return validators.isEmpty(pList);
    };

    isRowLoaded = ({ index }) => {
        //console.log(index);
    };

    loadMoreRows = ({ startIndex, stopIndex }) => {
        console.log('loadMoreRows', { startIndex, stopIndex });
        const { nextPage, onNextPage } = this.props;
        console.log(nextPage);
        const xSize = this.props.list.length;

        if (startIndex > xSize / 2 && stopIndex <= xSize - 1 && nextPage) {
            const xParams = strings.querystringToObject(nextPage);
            console.log(xParams);
            onNextPage && onNextPage(xParams);
        }
    };

    renderRow({ index, key, style, parent }) {
        const Component = this.props.item;
        const { keyName, ...othersItemProps } = this.props.itemProps;
        return (
            <CellMeasurer
                key={key}
                cache={this.cache}
                parent={parent}
                columnIndex={0}
                rowIndex={index}>
                <div key={key} style={style}>
                    <Component
                        key={`Item-${key}`}
                        index={index}
                        data={this.props.list[index]}
                        {...othersItemProps}
                    />
                </div>
            </CellMeasurer>
        );
    }

    componentDidMount() {
        const xElement = document.querySelector('.ReactVirtualized__List');
        xElement.removeAttribute('tabindex');
    }

    componentDidUpdate(prevProps, prevState) {
        const newRows = this.props.list.filter(
            value => prevProps.list.indexOf(value) < 0
        );
        const newRowsIndex = newRows.map(value =>
            this.props.list.indexOf(value)
        );
        newRowsIndex.forEach(index => {
            //console.log(index);
            this.cache.clear(index);
        });

        //console.log([...newRowsIndex]);

        //console.log(Math.min(...newRowsIndex));

        newRowsIndex.length &&
            this._list.recomputeRowHeights(Math.min(...newRowsIndex));
    }

    render() {
        const xClassRoot = classNames(Style.root, this.props.className, {
            [Style.emptyList]: this.hasListData(this.props.list)
        });

        const xRowCount = this.props.list.length;

        return (
            <div className={xClassRoot}>
                <InfiniteLoader
                    isRowLoaded={this.isRowLoaded}
                    loadMoreRows={this.loadMoreRows}
                    //isRowLoaded={pValue => console.log(pValue)}
                    rowCount={xRowCount}>
                    {({ onRowsRendered, registerChild }) => (
                        <AutoSizer>
                            {({ width, height }) => (
                                <List
                                    //ref={registerChild}
                                    ref={element => {
                                        this._list = element;
                                    }}
                                    width={width}
                                    onRowsRendered={onRowsRendered}
                                    height={height}
                                    deferredMeasurementCache={this.cache}
                                    rowHeight={this.cache.rowHeight}
                                    rowRenderer={this.renderRow}
                                    rowCount={xRowCount}
                                    overscanRowCount={
                                        this.props.overscanRowCount
                                    }
                                />
                            )}
                        </AutoSizer>
                    )}
                </InfiniteLoader>
            </div>
        );
    }
}

ListVirtual.propTypes = {
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

ListVirtual.defaultProps = {
    itemProps: {},
    list: [],
    overscanRowCount: 10
};

export default ListVirtual;
