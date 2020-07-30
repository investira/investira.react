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
        });
    }

    hasListData = pList => {
        return validators.isEmpty(pList);
    };

    isRowLoaded = ({ index }) => {
        //console.log(index);
    };

    loadMoreRows = ({ startIndex, stopIndex }) => {
        //console.log('loadMoreRows', { startIndex, stopIndex });
        const { nextPage, onNextPage } = this.props;
        const xSize = this.props.list.length;

        if (startIndex > xSize / 2 && stopIndex <= xSize - 1 && nextPage) {
            const xParams = strings.querystringToObject(nextPage);
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
                    rowCount={xRowCount}>
                    {({ onRowsRendered, registerChild }) => (
                        <AutoSizer>
                            {({ width, height }) => (
                                <List
                                    width={width}
                                    onRowsRendered={onRowsRendered}
                                    height={height}
                                    ref={registerChild}
                                    deferredMeasurementCache={this.cache}
                                    rowHeight={this.cache.rowHeight}
                                    rowRenderer={this.renderRow}
                                    rowCount={xRowCount}
                                    overscanRowCount={10}
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
    list: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
    emptyMessage: PropTypes.string,
    item: PropTypes.oneOfType([
        PropTypes.elementType,
        PropTypes.node,
        PropTypes.func
    ]).isRequired,
    className: PropTypes.object,
    itemProps: PropTypes.object,
    onEnter: PropTypes.func,
    onExited: PropTypes.func
};

ListVirtual.defaultProps = {
    itemProps: {},
    list: []
};

export default ListVirtual;
